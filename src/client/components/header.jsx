import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsJSON from "../../data/products.json";
import minesJSON from "../../data/mines.json";
import "./css/header.css";
import { Drawer } from "@material-tailwind/react";

function Header({ toBottom }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent flex items-center absolute left-0 top-0 z-40 w-full h-16 px-4">
            <div className="w-full h-full flex justify-between items-center">
                <a
                    href="/"
                    className="w-1/2 md:w-1/4 font-semibold flex items-start"
                >
                    <img
                        src="/assets/logo/pomzaexport-logo-white.png"
                        alt="Pomzaexport Logo"
                        className="w-60 d-shadow"
                    />
                </a>
                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(true)}
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
                {/* Navigation */}
                <div className="hidden md:flex md:items-center space-x-4 h-full text-lg text-white font-extrabold">
                    <Link
                        to="/about"
                        className="px-6 py-2 h-full text-md flex items-center cursor-pointer relative nav-link nav-item t-shadow"
                    >
                        Hakkımızda
                    </Link>
                    <span className="px-6 py-2 h-full text-lg flex items-center cursor-pointer relative nav-link nav-item t-shadow">
                        İşletmelerimiz
                        <ul className="nav-list pb-3">
                            {minesJSON.map((item, key) => {
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
                    <span className="px-6 py-2 h-full text-lg flex items-center cursor-pointer relative nav-link nav-item t-shadow">
                        Ürünlerimiz
                        <ul className="nav-list pb-3">
                            {productsJSON.map((item, key) => {
                                return (
                                    <li
                                        key={key}
                                        className="text-md text-white w-full px-6 pb-2 duration-200 z-40"
                                        onClick={() =>
                                            item.externalLink
                                                ? window.open(
                                                      item.link,
                                                      "_blank"
                                                  )
                                                : navigate(
                                                      "/product/" + item.id
                                                  )
                                        }
                                    >
                                        {item.name.tr}
                                    </li>
                                );
                            })}
                        </ul>
                    </span>
                    <Link
                        to="/contact"
                        className="px-6 py-2 h-full text-lg flex items-center cursor-pointer relative nav-link nav-item t-shadow"
                    >
                        İletişim
                    </Link>
                </div>
            </div>
            {/* Mobile Menu */}
            <Drawer
                placement="top"
                open={isOpen}
                onClose={() => setIsOpen(true)}
                className="h-full w-screen"
                overlay={true}
            >
                <div className="p-4 h-full w-full bg-[#151a38] z-50 flex flex-col items-center md:hidden duration-200">
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
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        Hakkımızda
                    </Link>
                    <Link
                        to="/facilities"
                        onClick={() => setIsOpen(false)}
                        className=" text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        İşletmelerimiz
                    </Link>
                    <Link
                        to="/products"
                        onClick={() => setIsOpen(false)}
                        className=" text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        Ürünlerimiz
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        to="/contact"
                        className=" text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        İletişim
                    </Link>
                </div>
            </Drawer>
            {/*isOpen && (
                <div className="fixed top-0 right-0 h-full w-64 bg-[#29292e] z-50 flex flex-col items-center p-4 text-white md:hidden duration-200">
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
            )*/}
        </nav>
    );
}

export default Header;
