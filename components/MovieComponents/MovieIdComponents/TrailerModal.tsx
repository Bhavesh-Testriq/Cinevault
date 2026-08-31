"use client"

import { PlayCircle, X } from "lucide-react"
import { useState } from "react"

export default function TrailerModal({ trailer_key }: { trailer_key?: string | null}) {
    const [isOpen, setIsOpen] = useState(false)

    return (

        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="mt-4 flex w-fit items-center cursor-pointer gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:scale-105 hover:bg-gray-200"
            >
                <PlayCircle className="h-5 w-5" />
                Watch Trailer
            </button>
            {
                isOpen &&
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full max-w-6xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-10 right-0 text-white hover:text-neutral-300"
                            aria-label="Close trailer"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <iframe
                            src={`https://www.youtube.com/embed/${trailer_key}?autoplay=1`}
                            title="Movie trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full rounded-lg"
                        />
                    </div>
                </div >
            }
        </>
    )
}