import { PlayCircle } from "lucide-react";
import MovieCardImage from "../MovieCardImage";
import Image from "next/image";
import Link from "next/link";

interface DetailedMovieProps {
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    genre_ids: { name: string }[];
    homepage: string;
    runtime: number;
}

export default function MovieHeroSection({ title, overview, poster_path, vote_average, release_date, genre_ids, homepage, runtime }: DetailedMovieProps) {
    const year = release_date ? release_date.split('-')[0] : "TBA";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return (
        <section className="relative h-[550px] overflow-hidden rounded-2xl">

            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                    fill
                    priority
                    className="scale-105 object-cover blur-[3px]"
                />

                <div className="absolute inset-0 bg-black/30" />

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex h-full items-end px-6 pb-8 md:px-10 lg:px-14">
                <div className="flex w-full items-end gap-6">

                    {/* Poster */}
                    <div className="hidden shrink-0 sm:block">
                        <MovieCardImage
                            title={title}
                            posterPath={poster_path}
                        />
                    </div>

                    {/* Details */}
                    <div className="max-w-2xl text-white">

                        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                            {title}
                        </h1>

                        <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-gray-300">
                            <span>⭐ {vote_average.toFixed(1)}</span>
                            <span>|</span>
                            <span>{year}</span>
                            <span>|</span>
                            <span>{hours}h {minutes}m</span>
                            <span>|</span>
                            <span>
                                {genre_ids[0]?.name}
                                <span className="mx-1">•</span>
                                {genre_ids[1]?.name}
                                <span className="mx-1">•</span>
                                {genre_ids[2]?.name}
                            </span>
                        </div>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-300">
                            {overview}
                        </p>

                        <Link href={homepage} target="_blank" className="mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-gray-200">
                            <PlayCircle className="h-5 w-5" />
                            Watch Now
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}