"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "Discover Your Next Movie",
        image: "/",
    },
    {
        id: 2,
        title: "Explore Trending Movies",
        image: "/images/movie-2.jpg",
    },
    {
        id: 3,
        title: "Find Your Favorites",
        image: "/images/movie-3.jpg",
    },
    {
        id: 4,
        title: "Watch Something Amazing",
        image: "/images/movie-4.jpg",
    },
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrent((prev) => (prev + 1) % slides.length);
    //     }, 3000); // 3 seconds

    //     return () => clearInterval(interval);
    //   }, []);

    return (
        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center w-1/2 px-10 gap-5">
                        <h1 className="text-5xl font-bold">Dune: Part Two</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid modi, vitae officia rerum aliquam atque fuga suscipit enim dignissimos, adipisci minus? Eveniet, est rem aliquam nam delectus minus iste quas!</p>
                        <div>
                            <span>⭐ 8.0 | </span>
                            <span>2024 | </span>
                            <span>Sci-Fi, Adventure</span>
                        </div>

                        <div>
                            <Link href={"/"} className="bg-teal-900/80 px-5 py-2.5 rounded-full">View Details</Link>

                        </div>
                    </div>
                </div>
            ))}

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