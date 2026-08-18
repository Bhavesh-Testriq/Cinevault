import Link from "next/link";
import MovieCardImage from "./MovieCardImage";

export const genreMap: Record<number, string> = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

interface MovieCardProps {
    id: number;
    title: string;
    description: string;
    posterPath: string | null;
    voteAverage: number;
    releaseDate: string;
    genre: number[];
}

export default function MovieLargeCard({ id, title, description, posterPath, voteAverage, releaseDate, genre }: MovieCardProps) {
    const year = releaseDate ? releaseDate.split('-')[0] : "TBA"
    return (
        <Link href={`/movies/${id}`}>
            <div className="group flex w-md cursor-pointer items-center gap-5 rounded-xl border border-white/5 bg-white/[0.03] p-3 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/30">
                {/* Poster */}

                <MovieCardImage title={title} posterPath={posterPath} />

                {/* Movie Information */}
                <div className="min-w-0 flex-1 space-y-3">
                    <h4 className="truncate text-lg font-semibold text-white">
                        {title}
                    </h4>

                    <p className="line-clamp-2 text-sm leading-5 text-gray-400">
                        {description}
                    </p>

                    <div className="text-xs text-gray-300">
                        ⭐ {voteAverage.toFixed(1)} <span className="mx-1 text-gray-600">•</span> {year}
                    </div>

                    <div className="truncate text-xs text-gray-400">
                        {genreMap[genre[0]] && <> {genreMap[genre[0]]}
                            <span className="mx-1">•</span></>}
                        {genreMap[genre[1]] && <> {genreMap[genre[1]]}
                            <span className="mx-1">•</span></>}
                        {genreMap[genre[2]] && <>{genreMap[genre[2]]}</>}
                    </div>
                </div>
            </div>
        </Link>
    )
}