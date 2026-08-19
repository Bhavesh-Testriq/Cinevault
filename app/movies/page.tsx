import Carousel from "@/components/Carousel";
import MovieGrid from "@/components/MovieComponents/MovieGrid";
import Pagination from "@/components/Pagination";
import { discoverMovies } from "@/lib/tmdb";

interface Movieprops {
    searchParams: Promise<{ page?: string }>
}

export default async function MoviePage({ searchParams }: Movieprops) {
    const params = await searchParams;
    const page = Number(params.page) || 1;

    const movies = await discoverMovies(params);   

    return (
        <main className="px-20 mb-10">
            <Carousel movies={movies.results} />

            {/* Movies Populated */}
            <MovieGrid movies={movies.results} />

            <Pagination currentPage={page} totalPages={Math.min(Number(movies.total_pages), 500)} />
        </main>
    )
}