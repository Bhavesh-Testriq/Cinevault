import MovieCarousel from "@/components/MovieComponents/MovieCarousel";
import CreditsSection from "@/components/MovieComponents/MovieIdComponents/CreditsSection";
import MovieHeroSection from "@/components/MovieComponents/MovieIdComponents/MovieHeroSection";
import { getMovieDetails, getMovieVideos, getTrailer } from "@/lib/tmdb";



export default async function MovieDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovieDetails(id);
    const similarMovies = movie.similar.results;

    const videos = await getMovieVideos(id);
    const trailer = getTrailer(videos)

    return (
        <main className="mb-10 px-6 md:px-10 lg:px-20">
            <MovieHeroSection
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                genre_ids={movie.genres}
                homepage={movie.homepage}
                runtime={movie.runtime}
                trailer_key={trailer?.key} />

            <div>
                <CreditsSection
                    cast={movie.credits.cast}
                    crew={movie.credits.crew} />
            </div>

            {
                similarMovies.length > 0 && <div className="mt-5">
                    <MovieCarousel title="Similar Movies" movies={similarMovies} />
                </div>
            }


        </main>
    );
}