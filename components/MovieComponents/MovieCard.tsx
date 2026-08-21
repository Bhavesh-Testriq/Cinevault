import { Heart, PlayCircle } from "lucide-react"
import Link from "next/link";
import MovieCardImage from "./MovieCardImage";

interface MovieCardProps {
    id: number;
    title: string;
    posterPath: string | null;
    voteAverage: number;
    releaseDate: string;
}

export default function MovieCard({ id, title, posterPath, releaseDate, voteAverage }: MovieCardProps) {
    const year = releaseDate ? releaseDate.split('-')[0] : "TBA"
    return (
        <div className="group relative w-fit max-w-full">
            <Link href={`/movies/${id}`} className="block">
                <MovieCardImage
                    title={title}
                    posterPath={posterPath}
                />
            </Link>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-lg">
                {/* Blur */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                {/* Movie information */}
                <div className="relative p-2 text-white transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0">
                    <h5 className="truncate text-sm font-semibold sm:text-base">
                        {title}
                    </h5>

                    <div className="text-xs text-gray-200 sm:text-sm">
                        ⭐ {voteAverage.toFixed(1)}
                        <span className="mx-1">|</span>
                        {year}
                    </div>
                </div>

                {/* Hover actions */}
                <div className="absolute inset-0 flex translate-y-4 items-center justify-around opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link href={`/movies/${id}`}
                        type="button"
                        className="flex items-center gap-1 cursor-pointer rounded-full bg-zinc-700 px-2 md:px-2 py-2 text-xs hover:bg-zinc-600 sm:py-2 sm:text-sm"
                    >
                        <PlayCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="sm:inline hidden">Watch</span>
                    </Link>

                    <button
                        type="button"
                        className="flex items-center gap-1 cursor-pointer rounded-full bg-zinc-700 px-2 sm:px-3 py-2 text-xs hover:bg-zinc-600 sm:py-2 sm:text-sm"
                    >
                        <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="sm:inline hidden">Add</span>
                    </button>
                </div>
            </div>
        </div>
    )
}