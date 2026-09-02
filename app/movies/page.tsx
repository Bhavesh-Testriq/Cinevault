import Carousel from "@/components/Carousel";
import MovieGrid from "@/components/MovieComponents/MovieGrid";
import Pagination from "@/components/Pagination";
import { discoverMovies } from "@/lib/tmdb";
import { Metadata } from "next";
import { Suspense } from "react";

interface Movieprops {
    searchParams: Promise<{ page?: string }>
}

export const metadata: Metadata = {
    title: "Explore & Watch out of Thousands | MUVIEEX",
    description: "Browse thousands of movies, discover what's trending, and uncover something new to add to your watchlist."
}

export default async function MoviePage({ searchParams }: Movieprops) {
    const params = await searchParams;
    const page = Number(params.page) || 1;

    const movies = await discoverMovies(params);

    return (
        <main className="mb-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <Carousel movies={movies.results} />

            {/* Movies Populated */}
            <MovieGrid movies={movies.results} />

            <Suspense fallback={null}>
                <Pagination currentPage={page} totalPages={Math.min(Number(movies.total_pages), 500)} />
            </Suspense>
        </main>
    )
}