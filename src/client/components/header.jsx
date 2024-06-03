import React, { useState } from "react";
import pomzaexport from "../../assets/pomzaexport-logo-white.png";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#010851] p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold flex items-center">
          <img src={pomzaexport} alt="Pomzaexport Logo" className="w-60" />
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none focus:text-gray-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <AlignJustify className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <div className="hidden md:flex md:items-center space-x-4">
          <Link
            to="/about"
            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
          >
            Hakkımızda
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
          >
            Ürünlerimiz
          </Link>
          <Link
            to="/docs"
            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
          >
            Belgelerimiz
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
          >
            İletişim
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-[rgba(1,8,81,0.85)] z-50 flex flex-col items-center p-4 text-white md:hidden transition duration-300 ease-in-out transform">
          <Link
            to="/about"
            onClick={closeMenu}
            className="mt-10 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
          >
            Hakkımızda
          </Link>
          <Link
            to="/products"
            onClick={closeMenu}
            className="mt-4 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
          >
            Ürünlerimiz
          </Link>
          <Link
            to="/docs"
            onClick={closeMenu}
            className="mt-4 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
          >
            Belgelerimiz
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-4 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
          >
            İletişim
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
