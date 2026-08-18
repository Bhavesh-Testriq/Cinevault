import Image from "next/image";

export default function MovieCardImage({title, posterPath}: {title: string, posterPath: string | null}) {
    return (
        <div className="h-64 w-48 overflow-hidden rounded-lg">
            {
                posterPath ?
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                        alt={title}
                        width={192}
                        height={256}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    :
                    <div className="flex h-full items-center justify-center text-neutral-500 text-sm">
                        No image
                    </div>
            }
        </div>
    )
}