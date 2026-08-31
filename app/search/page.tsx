import MovieGrid from "@/components/MovieComponents/MovieGrid";
import Pagination from "@/components/Pagination";
import { searchMovies } from "@/lib/tmdb";
import { Suspense } from "react";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
    const params = await searchParams;
    const query = params.q?.trim() ?? "";
    const page = Number(params.page) || 1;

    if (!query) {
        return (
            <main className="px-20 py-16 text-center">
                <p className="text-neutral-400 text-lg">Search for a movie to get started.</p>
            </main>
        )
    }

    const data = await searchMovies(query, page);

    return (
        <main className="my-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <h1 className="text-2xl font-semibold text-neutral-100 mb-1">
                Results for &quot;{query}&quot;
            </h1>
            <p className="text-sm text-neutral-400 mb-8">
                {data.total_results} {data.total_results === 1 ? "movie" : "movies"} found
            </p>

            {data.results.length === 0 ? (
                <p className="text-neutral-400">No movies matched your search. Try a different title.</p>
            ) : (
                <>
                    <MovieGrid movies={data.results} />
                    <Suspense fallback={null}>
                        <Pagination totalPages={Math.min(data.total_pages, 500)} currentPage={page} />
                    </Suspense>
                </>
            )}
        </main>
    )
}