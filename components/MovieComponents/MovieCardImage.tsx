import Image from "next/image";

export default function MovieCardImage({ title, posterPath }: { title: string, posterPath: string | null }) {
    return (
        <div className="aspect-[2/3] w-28 shrink-0 overflow-hidden rounded-lg sm:w-36 md:w-40">
            {posterPath ? (
                <Image
                    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                    alt={title}
                    width={192}
                    height={288}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-center text-xs text-neutral-500">
                    No image
                </div>
            )}
        </div>
    )
}