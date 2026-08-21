"use client"

import { useDebounce } from "@/hooks/useDebounce"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function SearchBar() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const params = new URLSearchParams(searchParams.toString())
    const [query, setQuery] = useState(params.get('q')?? "")
    const deboundedQuery = useDebounce(query, 500);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const trimmed = deboundedQuery.trim()
        params.set('q', deboundedQuery)
        params.set('page', String(1))

        if (trimmed) {
            router.push(`/search?${params.toString()}`)
        } else if (pathname === "/search") {
            router.push("/search")
        }
    }, [deboundedQuery])


    return (
        <form onSubmit={(event) => event.preventDefault()}>
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