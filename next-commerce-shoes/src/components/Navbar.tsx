import Link from "next/link";

function Navibar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-200">
          <Link href="/"className="uppercase font-bold text-emerald-50 h-12 flex items-center">
            Shoes Store
          </Link>
        </nav>
    )
}

export default Navibar