import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    let hasPrev = currentPage > 1;
    let hasNext = currentPage < totalPages;

    return (
        <div className="flex items-center justify-center gap-4 mt-10">
            <Link
                href={`/movies?page=${currentPage - 1}`}
                aria-disabled={!hasPrev}
                className={`px-4 py-2 rounded-lg border border-neutral-700 text-sm ${hasPrev ? "text-neutral-100 hover:bg-neutral-800" : "pointer-events-none text-neutral-600"
                    }`}
            >
                Previous
            </Link>

            <span className="text-neutral-400 text-sm">
                Page {currentPage} of {totalPages}
            </span>

            <Link
                href={`/movies?page=${currentPage + 1}`}
                aria-disabled={!hasNext}
                className={`px-4 py-2 rounded-lg border border-neutral-700 text-sm ${hasNext ? "text-neutral-100 hover:bg-neutral-800" : "pointer-events-none text-neutral-600"
                    }`}
            >
                Next
            </Link>
        </div>
    );
}