"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    params?:  string | null;
}

export default function NavLink({ href, children, params }: NavLinkProps) {
    const pathname = usePathname()
    let isActive = href == pathname;
    // const 
    return (
        <Link
            href={`${href}${params ? `?${params}` : ""}`}
            className={`
        ${isActive ? "border-b-2 border-teal-500 pb-1 text-teal-500" :
                    ""}`}>
            {children}
        </Link>
    )
}