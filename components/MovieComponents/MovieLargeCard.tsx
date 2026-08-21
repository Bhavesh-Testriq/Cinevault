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
        <Link href={`/movies/${id}`} className="block w-full">
  <div className="group flex w-full min-w-0 flex-col items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-3 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] sm:flex-row sm:items-center">

    {/* Poster */}
    <div className="shrink-0">
      <MovieCardImage
        title={title}
        posterPath={posterPath}
      />
    </div>

    {/* Content */}
    <div className="w-full min-w-0 flex-1 overflow-hidden text-center sm:text-left">

      <h4
        className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold text-white"
        title={title}
      >
        {title}
      </h4>

      {/* Description */}
      <p className="mt-2 hidden text-sm leading-5 text-gray-400 sm:line-clamp-2">
        {description}
      </p>

      {/* Rating */}
      <div className="mt-2 text-xs text-gray-300">
        ⭐ {voteAverage?.toFixed(1)}
        <span className="mx-1 text-gray-600">•</span>
        {year}
      </div>

      {/* Genres */}
      <div className="mt-2 hidden truncate text-xs text-gray-400 sm:block">
        {genre?.[0] && genreMap[genre[0]]}
        {genre?.[1] && genreMap[genre[1]] && (
          <> • {genreMap[genre[1]]}</>
        )}
        {genre?.[2] && genreMap[genre[2]] && (
          <> • {genreMap[genre[2]]}</>
        )}
      </div>

    </div>
  </div>
</Link>
    )
}