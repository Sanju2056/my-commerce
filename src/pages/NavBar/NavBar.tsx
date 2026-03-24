import { useState } from "react";
import {
  Menu,
  X,
  Heart,
  ShoppingCart,
  Search,
  ChevronRight,
} from "lucide-react";
import { navBarData, headerData } from "../../static";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 relative z-50">
      {/* --- Desktop Top Header --- */}
      <div className="hidden lg:block bg-gray-100">
        <div className="container mx-auto flex justify-end gap-6 py-2 px-4">
          {headerData.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-xs font-semibold border-r border-gray-300 pr-4 last:border-none"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* --- Main Navigation Bar --- */}
      <nav className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="font-bold text-xl  ">
              DriveStore
            </a>
          </div>

          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            {navBarData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="hover:text-blue-600 transition-colors"
                  onClick={() => console.log(item.title)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Heart size={24} className="cursor-pointer text-gray-600" />
            <ShoppingCart size={24} className="cursor-pointer text-gray-600" />
            <button className="lg:hidden" onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- SIDEBAR COMPONENTS --- */}

      {/* 1. Backdrop Overlay (Fades in) */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 60 }}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Sliding Drawer (Slides from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 70 }}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links - Styled like the Nike image */}
        <div className="flex-grow overflow-y-auto px-6 py-4">
          {/* Search inside Sidebar */}
          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md outline-none"
            />
          </div>

          {navBarData.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center justify-between py-5 border-b border-gray-100 group"
            >
              <span className="text-lg font-medium text-gray-800 group-hover:pl-2 transition-all">
                {item.title}
              </span>
              <ChevronRight size={20} className="text-gray-400" />
            </a>
          ))}

          {/* Additional Links (Help, Login, etc.) */}
         
        </div>

        {/* Bottom Buttons */}
        <div className="p-6 border-t space-y-3 bg-gray-50">
          <button className="w-full py-3 bg-black text-white rounded-full font-bold">
            Sign Up
          </button>
          <button className="w-full py-3 border border-gray-300 rounded-full font-bold">
            Login
          </button>
          <button className="w-full py-3 bg-black text-white rounded-full font-bold">
            Help{" "}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
