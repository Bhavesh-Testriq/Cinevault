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

const Card = ({ id, title, posterPath, releaseDate, voteAverage }: MovieCardProps) => {
    const year = releaseDate ? releaseDate.split('-')[0] : "TBA"
    return (
        <Link href={`/movies/${id}`}>
            <div className="group relative w-48 cursor-pointer">
                {/* Poster */}
                <MovieCardImage title={title} posterPath={posterPath} />

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-lg">
                    {/* Blur */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Movie information */}
                    <div className="relative p-2 text-white transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0">
                        <h5 className="font-semibold">{title}</h5>

                        <div className="text-sm text-gray-200">
                            ⭐ {voteAverage.toFixed(1)} <span className="mx-1">|</span> {year}
                        </div>
                    </div>

                    {/* Hover actions */}
                    <div className="absolute inset-0 flex translate-y-4 items-center justify-around opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="flex cursor-pointer items-center gap-1 rounded-full bg-zinc-700 px-3 py-2 text-sm transition hover:bg-zinc-600">
                            <PlayCircle className="h-4 w-4" />
                            Watch
                        </button>

                        <button className="flex cursor-pointer items-center gap-1 rounded-full bg-zinc-700 px-3 py-2 text-sm transition hover:bg-zinc-600">
                            <Heart className="h-4 w-4" />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card