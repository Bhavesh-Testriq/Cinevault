import Image from "next/image";

interface CreditsCardProps {
    name: string;
    role: string;
    profilePath: string;
}


export default function CreditsCard({ name, role, profilePath }: CreditsCardProps) {
    return (
        <div className="flex items-center gap-3">
            {/* Profile */}
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
                {
                profilePath ? <Image
                    src={`https://image.tmdb.org/t/p/w500${profilePath}`}
                    alt={name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                /> : 
                <div className="flex h-full items-center justify-center text-center text-neutral-500 text-sm">No Image</div>
                }
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-gray-200">
                    {name}
                </span>

                <span className="text-sm text-gray-400">
                    {role}
                </span>
            </div>
        </div>
    )
}