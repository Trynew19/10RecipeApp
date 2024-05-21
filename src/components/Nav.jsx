import { Link } from "react-router-dom"
function Nav() {
  return (
    <nav className="h-[10vh] flex items-center justify-between px-5 sm:px-16 bg-red-50 text-2xl"
        >
            <img
                className="h-full animate-spin "
                src="/images/logo.png"
                alt=""
            />

            <div className="flex gap-x-10 text-md items-center">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <button className="py-1 px-5 bg-red-100 rounded-md">Login</button>
        </nav>
  )
}

export default Nav
