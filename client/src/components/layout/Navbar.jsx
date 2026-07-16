import {
  FaBars,
  FaBell,
  FaMoon,
  FaSearch,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">

      {/* Left */}

      <div className="flex items-center gap-6">

        <button className="text-2xl text-slate-700 hover:text-blue-600 transition">
          <FaBars />
        </button>

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

      </div>

      {/* Center */}

      <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-[420px]">

        <FaSearch className="text-slate-400" />

        <input
          type="text"
          placeholder="Search employees, tasks, reports..."
          className="ml-3 bg-transparent outline-none w-full"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="relative text-xl text-slate-600 hover:text-blue-600">

          <FaBell />

          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">

            3

          </span>

        </button>

        <button className="text-xl text-slate-600 hover:text-yellow-500">

          <FaMoon />

        </button>

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

            AS

          </div>

          <div className="hidden lg:block">

            <h3 className="font-semibold text-slate-800">

              Ashok Kr Swami

            </h3>

            <p className="text-sm text-slate-500">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;