import React from "react";
import { Linkedin, Facebook, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Footer({ hFull = false }) {
    const navigate = useNavigate();
    const { mines, products, lang } = React.useContext(AppContext);
    const compareName = (lang, a, b, name) => {
        if (lang == "TR") {
            return a[name + "_tr"].localeCompare(b[name + "_tr"]);
        } else {
            return a[name + "_en"].localeCompare(b[name + "_en"]);
        }
    };

    return (
        <div
            className="w-full bg-[#151a38] md:px-10 p-4 pt-10 max-w-screen-2x1 mx-auto text-white overflow-scroll"
            style={{ height: hFull ? "100vh" : "fit-content" }}
        >
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3 space-y-8">
                    {!hFull && (
                        <Link
                            to="/"
                            className="text-2x1 font-semibold flex items-center space-x-3 text-primary"
                        >
                            <img
                                src="/assets/logo/pomzaexport-logo-white.png"
                                alt=""
                                className="w-60 inline-block items-center"
                            />
                        </Link>
                    )}
                    <p className="md:w-1/2">
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Maiores, numquam. */}
                    </p>
                    {/*{" "}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" Your email"
                        className="bg-[#fbfbff] py-2 px-2 rounded-md focus:outline-none text-black"
                    />
                    <input
                        type="submit"
                        value="Subscribe"
                        className="px-3 py-2 bg-[#252525] rounded-md -ml-2 cursor-pointer hover:bg-[#010851]/10 duration-300 transition-all"
                    />{" "}
                    */}
                </div>
                {/* footer navigations */}
                <div className="md:w-2/3 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
                    {/* Mines */}
                    <div className="space-y-4 mt-4">
                        <h4 className="text-xl underline">
                            {lang == "TR" ? "İşletmelerimiz" : "Operations"}
                        </h4>
                        <ul className="space-y-3">
                            {mines
                                .sort((a, b) =>
                                    compareName(lang, a, b, "mineName")
                                )
                                .map((item, key) => {
                                    return (
                                        <Link
                                            key={key}
                                            to={"/mine/" + item.mineId}
                                            className="block hover:text-gray-300"
                                        >
                                            {lang == "TR"
                                                ? item.mineName_tr
                                                : item.mineName_en}
                                        </Link>
                                    );
                                })}
                            {/* <Link
                                to="/mine/1"
                                className="block hover:text-gray-300"
                            >
                                Sart Maden İşletmesi
                            </Link>
                            <Link
                                to="/mine/2"
                                className="block hover:text-gray-300"
                            >
                                Yeniköy Maden İşletmesi
                            </Link>
                            <Link
                                to="/mine/3"
                                className="block hover:text-gray-300"
                            >
                                Küner Maden İşletmesi
                            </Link> */}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4 mt-4">
                        <h4 className="text-xl underline">
                            {lang == "TR" ? "Ürünlerimiz" : "Products"}
                        </h4>
                        <ul className="space-y-3">
                            {products.sort().map((item, key) => {
                                return (
                                    <li
                                        key={key}
                                        className="block hover:text-gray-300 cursor-pointer"
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
                            {/*<Link
                                to="/product/0"
                                className="block hover:text-gray-300"
                            >
                                Altın
                            </Link>
                            <Link
                                to="/product/1"
                                className="block hover:text-gray-300"
                            >
                                Kuvars
                            </Link>
                            <Link
                                to="/product/2"
                                className="block hover:text-gray-300"
                            >
                                Agrega
                            </Link>
                            <Link
                                to="/product/8"
                                className="block hover:text-gray-300"
                            >
                                Pomza
                            </Link>
                            <Link
                                to="/product/7"
                                className="block hover:text-gray-300"
                            >
                                Perlit
                            </Link>
                            <Link
                                to="/product/2"
                                className="block hover:text-gray-300"
                            >
                                Rutil
                            </Link>
                            <Link
                                to="/product/4"
                                className="block hover:text-gray-300"
                            >
                                Garnet
                            </Link>
                            <Link
                                to="/product/6"
                                className="block hover:text-gray-300"
                            >
                                Hematit
                            </Link>
                            <Link
                                to="/product/5"
                                className="block hover:text-gray-300"
                            >
                                Silis Kumu
                            </Link>
                            <Link
                                to="/product/11"
                                className="block hover:text-gray-300"
                            >
                                Bims Blok
                            </Link>
                            <Link
                                to="/product/10"
                                className="block hover:text-gray-300"
                            >
                                Hazır Beton
                            </Link>
                            <Link
                                to="/product/12"
                                className="block hover:text-gray-300"
                            >
                                Yapı Elemanları
                            </Link>
                            <Link
                                to="/product/8"
                                className="block hover:text-gray-300"
                            >
                                Korund
                            </Link>
                            <Link
                                to="/product/13"
                                className="block hover:text-gray-300"
                            >
                                Kil
                            </Link>*/}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="space-y-4 mt-4">
                        <h4 className="text-xl underline">
                            {lang == "TR"
                                ? "İletişim Adreslerimiz"
                                : "Contact Addresses"}
                        </h4>
                        <ul className="space-y-5 text-sm">
                            <p>
                                <strong>
                                    {lang == "TR"
                                        ? "SART MADEN İŞLETMESİ"
                                        : "SART MINING OPERATIONS"}
                                </strong>
                                <br />
                                Sart Mah. Pomza Sk. No: 40, Salihli/MANİSA
                                <br />
                                {lang == "TR" ? "Telefon" : "Phone"} : +90 236
                                724 20 21
                                <br />
                                Fax : +90 236 724 30 51
                            </p>
                            <p>
                                <strong>
                                    {lang == "TR"
                                        ? "MENDERES MADEN İŞLETMESİ"
                                        : "MENDERES MINING OPERATIONS"}
                                </strong>
                                <br />
                                Küner Mah. 7801 Sk. No:94 Menderes/İZMİR
                                <br />
                                {lang == "TR" ? "Telefon" : "Phone"} : +90 232
                                782 14 46
                                <br />
                                Fax : +90 232 782 15 98
                            </p>
                            <p>
                                <strong>
                                    {lang == "TR"
                                        ? "ETİPER PERLİT İŞLETMESİ"
                                        : "ETİPER PERLITE OPERATIONS"}
                                </strong>
                                <br />
                                Yeniköy Mah. Menderes - Orhanlı Yolu Sk. No :
                                179/22 Menderes/İZMİR
                                <br />
                                {lang == "TR" ? "Telefon" : "Phone"} : +90 232
                                787 67 24
                                <br />
                                Fax : +90 232 782 67 25
                            </p>
                            <p>
                                <strong>
                                    {lang == "TR"
                                        ? "EİLE POMEX YAPI KİMYASALLARI"
                                        : "EİLE POMEX CONSTRUCTION CHEMICALS"}
                                </strong>
                                <br />
                                Kavaklıdere Cad. No: 277
                                Kavaklıdere/Bornova/İZMİR
                                <br />
                                {lang == "TR" ? "Telefon" : "Phone"} : +90 232
                                360 17 77
                                <br />
                                Fax : +90 232 360 16 16
                            </p>
                            <p>
                                <strong>
                                    {lang == "TR"
                                        ? "ANKARA OFİS"
                                        : "ANKARA OFFICE"}
                                </strong>
                                <br />
                                Çukurca Birlik Mah. 447 Sk. No: 3/5
                                Çankaya/ANKARA
                                <br />
                                {lang == "TR" ? "Telefon" : "Phone"} : +90 312
                                495 64 90
                                <br />
                                Fax : +90 312 495 64 93
                            </p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            {/* Social Media */}
            <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
                <p>@2024 POMZA EXPORT. Tüm Hakları Saklıdır.</p>
                <div className="flex items-center space-x-5">
                    <Link
                        to="https://www.linkedin.com/company/pomzaexport/"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300"
                    >
                        <Linkedin />
                    </Link>
                    <Link
                        to="https://facebook.com"
                        target="_blank"
                        aria-label="Facebook"
                        className="w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300"
                    >
                        <Facebook />
                    </Link>
                    <Link
                        to="https://youtube.com"
                        target="_blank"
                        aria-label="Youtube"
                        className="w-8 cursor-pointer hover:-translate-y-1 transition-all duration-300"
                    >
                        <Youtube />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
