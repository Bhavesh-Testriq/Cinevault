import MovieHeroSection from "@/components/MovieComponents/MovieHeroSection";
import { getMovieDetails } from "@/lib/tmdb";

export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovieDetails(id);

    return (
        <main className="mb-10 px-6 md:px-10 lg:px-20">
            <MovieHeroSection title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                genre_ids={movie.genres}
                cast={movie.credits.cast}
                crew={movie.credits.crew}
                homepage={movie.homepage}
                runtime={movie.runtime} />
        </main>
    );
}