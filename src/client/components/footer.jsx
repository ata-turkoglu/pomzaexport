import React from "react";
import { Linkedin, Facebook, Youtube } from "lucide-react";

function Footer({ hFull = false }) {
    return (
        <div
            className="w-full bg-[#151a38] md:px-10 p-3 pt-10 max-w-screen-2x1 mx-auto text-white overflow-scroll"
            style={{ height: hFull ? "100vh" : "fit-content" }}
        >
            <div className="my-12 flex flex-col md:flex-row gap-10">
                <div className="md:w-1/3 space-y-8">
                    {!hFull && (
                        <a
                            href="/"
                            className="text-2x1 font-semibold flex items-center space-x-3 text-primary"
                        >
                            <img
                                src="/assets/logo/pomzaexport-logo-white.png"
                                alt=""
                                className="w-60 inline-block items-center"
                            />
                        </a>
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
                        <h4 className="text-xl underline">İşletmelerimiz</h4>
                        <ul className="space-y-3">
                            <a
                                href="/mine/1"
                                className="block hover:text-gray-300"
                            >
                                Sart Maden İşletmesi
                            </a>
                            <a
                                href="/mine/2"
                                className="block hover:text-gray-300"
                            >
                                Yeniköy Maden İşletmesi
                            </a>
                            <a
                                href="/mine/3"
                                className="block hover:text-gray-300"
                            >
                                Küner Maden İşletmesi
                            </a>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4 mt-4">
                        <h4 className="text-xl underline">Ürünlerimiz</h4>
                        <ul className="space-y-3">
                            <a
                                href="/product/0"
                                className="block hover:text-gray-300"
                            >
                                Altın
                            </a>
                            <a
                                href="/product/1"
                                className="block hover:text-gray-300"
                            >
                                Kuvars
                            </a>
                            <a
                                href="/product/2"
                                className="block hover:text-gray-300"
                            >
                                Agrega
                            </a>
                            <a
                                href="/product/8"
                                className="block hover:text-gray-300"
                            >
                                Pomza
                            </a>
                            <a
                                href="/product/7"
                                className="block hover:text-gray-300"
                            >
                                Perlit
                            </a>
                            <a
                                href="/product/2"
                                className="block hover:text-gray-300"
                            >
                                Rutil
                            </a>
                            <a
                                href="/product/4"
                                className="block hover:text-gray-300"
                            >
                                Garnet
                            </a>
                            <a
                                href="/product/6"
                                className="block hover:text-gray-300"
                            >
                                Hematit
                            </a>
                            <a
                                href="/product/5"
                                className="block hover:text-gray-300"
                            >
                                Silis Kumu
                            </a>
                            <a
                                href="/product/11"
                                className="block hover:text-gray-300"
                            >
                                Bims Blok
                            </a>
                            <a
                                href="/product/10"
                                className="block hover:text-gray-300"
                            >
                                Hazır Beton
                            </a>
                            <a
                                href="/product/12"
                                className="block hover:text-gray-300"
                            >
                                Yapı Elemanları
                            </a>
                            <a
                                href="/product/8"
                                className="block hover:text-gray-300"
                            >
                                Korund
                            </a>
                            <a
                                href="/product/13"
                                className="block hover:text-gray-300"
                            >
                                Kil
                            </a>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="space-y-4 mt-4">
                        <h4 className="text-xl underline">
                            İletişim Adreslerimiz
                        </h4>
                        <ul className="space-y-5 text-sm">
                            <p className="hover:text-gray-300">
                                <strong>SART MADEN İŞLETMESİ</strong>
                                <br />
                                Sart Mah. Pomza Sk. No: 40, Salihli/MANİSA
                                <br />
                                Telefon : +90 236 774 20 21
                                <br />
                                Fax : +90 236 774 30 51
                            </p>
                            <p className="hover:text-gray-300">
                                <strong>MENDERES MADEN İŞLETMESİ</strong>
                                <br />
                                Küner Mah. 7801 Sk. No:94 Menderes/İZMİR
                                <br />
                                Telefon : +90 232 782 14 46
                                <br />
                                Fax : +90 232 782 15 98
                            </p>
                            <p className="hover:text-gray-300">
                                <strong>ETİPER PERLİT İŞLETMESİ</strong>
                                <br />
                                Yeniköy Mah. Menderes - Orhanlı Yolu Sk. No :
                                179/22 Menderes/İZMİR
                                <br />
                                Telefon : +90 232 787 67 24
                                <br />
                                Fax : +90 232 782 67 25
                            </p>
                            <p className="hover:text-gray-300">
                                <strong>EİLE POMEX YAPI KİMYASALLARI</strong>
                                <br />
                                Kavaklıdere Cad. No: 277
                                Kavaklıdere/Bornova/İZMİR
                                <br />
                                Telefon : +90 232 360 16 16
                                <br />
                                Fax : +90 232 360 17 77
                            </p>
                            <p className="hover:text-gray-300">
                                <strong>ANKARA OFİS</strong>
                                <br />
                                Çukurca Birlik Mah. 447 Sk. No: 3/5
                                Çankaya/ANKARA
                                <br />
                                Telefon : +90 312 495 64 50
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
                    <a
                        href="https://www.linkedin.com/company/pomzaexport/"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        aria-label="Facebook"
                        className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        aria-label="Youtube"
                        className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300"
                    >
                        <Youtube />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
