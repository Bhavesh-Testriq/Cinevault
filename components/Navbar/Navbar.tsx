import { Search, User } from "lucide-react"
import NavLink from "./NavLink"
import SearchBar from "./SearchBar"
import { Suspense } from "react"

const Navbar = () => {

    return (
        <header className="border-b border-white/5">
            <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-5">

                {/* Top row / Logo */}
                <div className="flex  sm:gap-10">
                    <div className="flex w-full items-center justify-between lg:w-auto">
                        <h3 className="text-2xl font-bold sm:text-3xl">
                            CINEVAULT
                        </h3>

                        {/* Profile - visible here on mobile */}
                        {/* <div className="rounded-full border border-zinc-50/20 p-2 lg:hidden">
                        <User className="h-5 w-5" />
                    </div> */}

                        {/* Navigation */}
                    </div>

                    <div className="flex items-center justify-center gap-5 text-sm sm:gap-8 sm:text-base lg:shrink-0 lg:text-lg">
                        <NavLink href="/" children="Home" />
                        <NavLink params="page=1" href="/movies" children="Movies" />
                        <NavLink href="#" children="Genre" />
                    </div>
                </div>
                {/* Search */}
                <div className="flex w-full min-w-0 items-center rounded-full bg-zinc-800 px-4 py-2 lg:flex-1">
                    <Search className="h-5 w-5 shrink-0 text-zinc-400" />
                    <Suspense fallback={null}>
                        <SearchBar />
                    </Suspense>
                </div>

                {/* Profile - desktop */}
                {/* <div className="hidden shrink-0 rounded-full border border-zinc-50/20 p-2 lg:block">
                    <User className="h-5 w-5" />
                </div> */}
            </nav>
        </header>

    )
}

export default Navbar