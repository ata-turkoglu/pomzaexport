import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ toBottom }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#010851] p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <a
                    href="/"
                    className="text-2xl font-semibold flex items-center"
                >
                    <img
                        src="/assets/logo/pomzaexport-logo-white.png"
                        alt="Pomzaexport Logo"
                        className="w-60"
                    />
                </a>
                <div className="md:hidden">
                    <button
                        onClick={toBottom}
                        type="button"
                        className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex md:items-center space-x-4">
                    <Link
                        to="/"
                        className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Hakkımızda
                    </Link>
                    <Link
                        to="/"
                        className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Ürünlerimiz
                    </Link>
                    <Link
                        to="/"
                        className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Belgelerimiz
                    </Link>
                    <Link
                        onClick={toBottom}
                        className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        İletişim
                    </Link>
                </div>
            </div>
            {false && (
                <div className="fixed top-0 right-0 h-full w-64 bg-[#010851] z-50 flex flex-col items-center p-4 text-white md:hidden">
                    <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="self-end text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <Link
                        to="/"
                        className="mt-10 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
                    >
                        Hakkımızda
                    </Link>
                    <Link
                        to="/"
                        className="mt-4 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
                    >
                        Ürünlerimiz
                    </Link>
                    <Link
                        to="/"
                        className="mt-4 text-white hover:text-gray-400 px-3 py-2 rounded-md text-xl font-medium"
                    >
                        Belgelerimiz
                    </Link>
                    <Link
                        to="/"
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
