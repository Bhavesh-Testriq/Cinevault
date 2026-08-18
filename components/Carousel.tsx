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

    if(slides.length == 0)
        return null;
    
    return (
        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
            {slides.map((slide, index) =>{
            console.log(slide.id);
            return (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {
                        slide.poster_path ?
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                                fill={true}
                            />
                            :
                            <p>No image</p>
                    }
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center w-1/2 px-10 gap-5">
                        <h1 className="text-5xl font-bold">{slide.title}</h1>
                        <p>{slide.overview}</p>
                        <div>
                            <span>⭐ {slide.vote_average.toFixed(1)} | </span>
                            <span>{slide.release_date.split('-')[0]}</span>
                        </div>

                        <div>
                            <Link href={`/movies/${slide.id}`} className="bg-teal-900/80 px-5 py-2.5 rounded-full">View Details</Link>

                        </div>
                    </div>
                </div>
            )})}

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 cursor-pointer rounded-full transition-all ${index === current
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}