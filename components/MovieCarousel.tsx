"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

const movies = [
  { id: 1, title: "Dune: Part Two", image: "/event5.png" },
  { id: 2, title: "Interstellar", image: "/event5.png" },
  { id: 3, title: "Inception", image: "/event5.png" },
  { id: 4, title: "The Batman", image: "/event5.png" },
  { id: 5, title: "Avatar", image: "/event5.png" },
  { id: 6, title: "Oppenheimer", image: "/event5.png" },
  { id: 7, title: "Oppenheimer", image: "/event5.png" },
  { id: 8, title: "Oppenheimer", image: "/event5.png" },
  { id: 9, title: "Oppenheimer", image: "/event5.png" },
  { id: 10, title: "Oppenheimer", image: "/event5.png" },
  { id: 11, title: "Oppenheimer", image: "/event5.png" },
  { id: 12, title: "Oppenheimer", image: "/event5.png" },
];

export default function MovieCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;

    rowRef.current.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  };

  return (
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
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute cursor-pointer right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition hover:bg-black"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}