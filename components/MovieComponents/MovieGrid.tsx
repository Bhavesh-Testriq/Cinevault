import MovieLargeCard from "./MovieLargeCard";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
}

export default function MovieGrid({ movies }: { movies: Movie[] }) {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 mt-10 ">
            {
                movies.slice(0, (movies.length - (movies.length % 3))).map((movie) => (
                    <MovieLargeCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        posterPath={movie.poster_path}
                        voteAverage={movie.vote_average}
                        releaseDate={movie.release_date}
                        genre={movie.genre_ids} />
                ))
            }
        </div>
    )
}