import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsJSON from "../../data/products.json";
import minesJSON from "../../data/mines.json";
import "./css/header.css";

function Header({ toBottom }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [mines, setMines] = useState([]);

    useEffect(() => {
        const pData = productsJSON.map((item) => {
            return { id: item.id, name: item.name };
        });
        setProducts(pData);
        const mData = minesJSON.map((item) => {
            return { id: item.id, name: item.name };
        });
        setMines(mData);
    }, []);

    return (
        <nav className="bg-transparent flex items-center fixed z-40 w-full h-16 px-4">
            <div className="w-full h-full flex justify-between items-center">
                <a
                    href="/"
                    className="w-1/2 md:w-1/4 font-semibold flex items-start"
                >
                    <img
                        src="/assets/logo/pomzaexport-logo-white.png"
                        alt="Pomzaexport Logo"
                        className="w-60"
                    />
                </a>
                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
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
                <div className="hidden md:flex md:items-center space-x-4 h-full">
                    <Link
                        to="/about"
                        className="text-white px-6 py-2 h-full text-md flex items-center font-medium cursor-pointer relative nav-link nav-item"
                    >
                        Hakkımızda
                    </Link>
                    <span className="text-white px-6 py-2 h-full text-md flex items-center font-medium cursor-pointer relative nav-link nav-item">
                        İşletmelerimiz
                        <ul className="nav-list pb-3">
                            {mines.map((item, key) => {
                                return (
                                    <li
                                        key={key}
                                        className="text-md text-white w-full px-6 pb-3 duration-200 z-40"
                                        onClick={() =>
                                            navigate("/mine/" + item.id)
                                        }
                                    >
                                        {item.name.tr}
                                    </li>
                                );
                            })}
                        </ul>
                    </span>
                    <span className="text-white px-6 py-2 h-full text-md flex items-center font-medium cursor-pointer relative nav-link nav-item">
                        Ürünlerimiz
                        <ul className="nav-list pb-3">
                            {products.map((item, key) => {
                                return (
                                    <li
                                        key={key}
                                        className="text-md text-white w-full px-6 pb-2 duration-200 z-40"
                                        onClick={() =>
                                            navigate("/product/" + item.id)
                                        }
                                    >
                                        {item.name.tr}
                                    </li>
                                );
                            })}
                        </ul>
                    </span>
                    <Link
                        onClick={toBottom}
                        className="text-white px-6 py-2 h-full text-md flex items-center font-medium cursor-pointer relative nav-link nav-item"
                    >
                        İletişim
                    </Link>
                </div>
            </div>
            {/* Mobile Menu */}
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
