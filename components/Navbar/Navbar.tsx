import { Search, User } from "lucide-react"
import Link from "next/link"
import NavLink from "./NavLink"

const Navbar = () => {

    return (
        <header>
            <nav className="flex justify-between items-center gap-30 w-[80vw] m-auto px-10 py-5">
                {/* Logo */}
                <div>
                    <h3 className="text-3xl font-bold">CINEVAULT</h3>
                </div>

                {/* Navigation */}
                <div className="flex gap-10 text-lg">
                    <NavLink href="/" children="Home" />
                    <NavLink params={"page=1"} href="/movies" children="Movies" />
                    <NavLink href="/genre" children="Genre"/>
                </div>

                {/* Search Input */}
                <div className="flex items-center w-full bg-zinc-800 p-2 rounded-full">
                    <Search className="w-5 h-5"/>
                    <form action="">
                        <input 
                        type="text" 
                        name="search" 
                        placeholder="Search"
                        className="px-2 w-full border-none outline-none "  />
                    </form>
                </div>

                {/* Profile */}
                <div className="p-2 border-1 border-zinc-50/20 rounded-full">
                    <User/>
                </div>
            </nav>
        </header>
    
    )
}

export default Navbar