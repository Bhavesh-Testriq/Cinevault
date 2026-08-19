"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./MovieCard";
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

export default function MovieCarousel({ title, movies }: MovieSectionProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h4 className="text-2xl mb-2">{title}</h4>
        <Link href={"/movies?page=1"} className="text-sm underline ">See more</Link>
      </div>
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute cursor-pointer left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition hover:bg-black"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Movie Row */}
        <div
          ref={rowRef}
          className="flex gap-5 overflow-hidden"
        >
          {
            movies.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                voteAverage={movie.vote_average}
                releaseDate={movie.release_date} />
            ))
          }
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute cursor-pointer right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition hover:bg-black"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}