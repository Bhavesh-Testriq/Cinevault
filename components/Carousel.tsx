"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
    overview: string;
}

interface MovieSectionProps {
    movies: Movie[];
}

export default function Carousel({ movies }: MovieSectionProps) {
    const [current, setCurrent] = useState(0);
    const [slides, setSlides] = useState<Movie[]>([]);


    useEffect(() => {
        const shuffled = [...movies].sort(() => 0.5 - Math.random());
        setSlides(shuffled.slice(0, 4));
    }, [movies]);

    useEffect(() => {
        if (slides.length === 0) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, [slides]);

    if (slides.length == 0)
        return null;

    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl sm:h-[450px] sm:rounded-2xl lg:h-[500px]">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                        }`}
                >
                    {/* Image */}
                    {slide.poster_path ? (
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            loading="eager"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-gray-400">
                            No image
                        </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="absolute inset-0 flex w-full flex-col justify-center gap-3 px-5 sm:w-3/4 sm:gap-4 sm:px-8 md:w-2/3 lg:w-1/2 lg:gap-5 lg:px-10">
                        <h1 className="line-clamp-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                            {slide.title}
                        </h1>

                        <p className="line-clamp-3 text-sm leading-5 text-gray-200 sm:text-base sm:leading-6">
                            {slide.overview}
                        </p>

                        <div className="text-sm sm:text-base">
                            <span>⭐ {slide.vote_average.toFixed(1)} | </span>
                            <span>
                                {slide.release_date
                                    ? slide.release_date.split("-")[0]
                                    : "TBA"}
                            </span>
                        </div>

                        <div>
                            <Link
                                href={`/movies/${slide.id}`}
                                className="inline-block rounded-full bg-teal-900/80 px-4 py-2 text-sm transition hover:bg-teal-800 sm:px-5 sm:py-2.5 sm:text-base"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-5 sm:gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-1.5 cursor-pointer rounded-full transition-all sm:h-2 ${index === current
                                ? "w-6 bg-white sm:w-8"
                                : "w-1.5 bg-white/50 sm:w-2"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}