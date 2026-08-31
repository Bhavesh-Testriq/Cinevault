"use client"

import { useDebounce } from "@/hooks/useDebounce"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function SearchBar() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const [query, setQuery] = useState(searchParams.get('q') ?? "")
    let deboundedQuery = useDebounce(query, 500);
    const isFirstRender = useRef(true);

    const runSearch = (term: string) => {
        const trimmed = term.trim()
        const params = new URLSearchParams(searchParams.toString());

        if (trimmed) {
            params.set('q', trimmed)
            params.set('page', "1")
            router.push(`/search?${params.toString()}`)
        } else if (pathname === "/search") {
            router.push("/search");
        }
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        runSearch(deboundedQuery)
    }, [deboundedQuery])


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        runSearch(query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Movies..."
                className="px-2 w-full border-none outline-none " />
        </form>
    )
}