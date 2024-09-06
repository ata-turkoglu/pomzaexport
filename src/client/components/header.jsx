import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productsJSON from "../../data/products.json";
import minesJSON from "../../data/mines.json";
import "./css/header.css";
import { Drawer } from "@material-tailwind/react";
import { AppContext } from "../context/AppContext";

function Header({ toBottom }) {
    const navigate = useNavigate();
    const { mines, products, lang, setLang } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    const compareName = (lang, a, b, name) => {
        if (lang == "TR") {
            return a[name + "_tr"].localeCompare(b[name + "_tr"]);
        } else {
            return a[name + "_en"].localeCompare(b[name + "_en"]);
        }
    };

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
                        className="px-7 py-2 h-full text-md flex items-center cursor-pointer relative nav-link nav-item t-shadow"
                    >
                        {lang == "TR" ? "Hakkımızda" : "About"}
                    </Link>
                    <span className="px-7 py-2 h-full text-lg flex items-center cursor-default relative nav-link nav-item t-shadow">
                        {lang == "TR" ? "İşletmelerimiz" : "Operations"}
                        <ul className="nav-list pb-3">
                            {mines
                                .sort((a, b) =>
                                    compareName(lang, a, b, "mineName")
                                )
                                .map((item, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className="text-md text-white w-full px-6 pb-3 duration-200 z-40 cursor-pointer"
                                            onClick={() =>
                                                navigate("/mine/" + item.mineId)
                                            }
                                        >
                                            {lang == "TR"
                                                ? item.mineName_tr
                                                : item.mineName_en}
                                        </li>
                                    );
                                })}
                        </ul>
                    </span>
                    <span className="px-7 py-2 h-full text-lg cursor-default flex items-center relative nav-link nav-item t-shadow">
                        {lang == "TR" ? "Ürünlerimiz" : "Products"}
                        <ul className="nav-list pb-3">
                            {products
                                .sort((a, b) =>
                                    compareName(lang, a, b, "productName")
                                )
                                .map((item, key) => {
                                    return (
                                        <li
                                            key={key}
                                            className="text-md text-white w-full px-5 pb-2 duration-200 z-40 cursor-pointer"
                                            onClick={() =>
                                                item.link
                                                    ? window.open(
                                                          item.link,
                                                          "_blank"
                                                      )
                                                    : navigate(
                                                          "/product/" +
                                                              item.productId
                                                      )
                                            }
                                        >
                                            {lang == "TR"
                                                ? item.productName_tr
                                                : item.productName_en}
                                        </li>
                                    );
                                })}
                        </ul>
                    </span>
                    <Link
                        to="/contact"
                        className="px-6 py-2 h-full text-lg flex items-center cursor-pointer relative nav-link nav-item t-shadow"
                    >
                        {lang == "TR" ? "İletişim" : "Contact"}
                    </Link>
                    <span className="px-7 py-2 h-full text-lg flex items-center cursor-default relative nav-link nav-item t-shadow">
                        {lang}
                        <ul className="nav-list pb-3">
                            <li
                                className="text-md text-white w-full px-6 pb-3 duration-200 z-40 cursor-pointer"
                                onClick={() => setLang("TR")}
                            >
                                TR
                            </li>
                            <li
                                className="text-md text-white w-full px-6 pb-3 duration-200 z-40 cursor-pointer"
                                onClick={() => setLang("EN")}
                            >
                                EN
                            </li>
                        </ul>
                    </span>
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
                        {lang == "TR" ? "Hakkımızda" : "About"}
                    </Link>
                    <Link
                        to="/facilities"
                        onClick={() => setIsOpen(false)}
                        className=" text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        {lang == "TR" ? "İşletmelerimiz" : "Operations"}
                    </Link>
                    <Link
                        to="/products"
                        onClick={() => setIsOpen(false)}
                        className=" text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        {lang == "TR" ? "Ürünlerimiz" : "Products"}
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        to="/contact"
                        className=" text-white hover:text-gray-400 my-4 rounded-md text-xl font-medium"
                    >
                        {lang == "TR" ? "İletişim" : "Contact"}
                    </Link>
                    <span className="px-6 py-2 h-full text-lg text-white flex items-center cursor-default relative nav-link nav-item t-shadow">
                        {lang}
                        <ul className="nav-list pb-3">
                            <li
                                className="text-md text-white w-full px-6 pb-3 duration-200 z-40 cursor-pointer"
                                onClick={() => setLang("TR")}
                            >
                                TR
                            </li>
                            <li
                                className="text-md text-white w-full px-6 pb-3 duration-200 z-40 cursor-pointer"
                                onClick={() => setLang("EN")}
                            >
                                EN
                            </li>
                        </ul>
                    </span>
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
