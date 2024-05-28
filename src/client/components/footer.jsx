import React from "react";
import pomzaexport from "../../assets/pomzaexport-logo-white.png";
import {
    Linkedin,
    Facebook,
    Youtube
} from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#010851] md:px-10 p-3 max-w-screen-2x1 mx-auto text-white ">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2x1 font-semibold flex items-center space-x-3 text-primary"
          >
            <img
              src={pomzaexport}
              alt=""
              className="w-60 inline-block items-center"
            />
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            numquam.
          </p>
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
            className="px-3 py-2 bg-[#2769ae] rounded-md -ml-2 cursor-pointer hover:bg-[#cad9eb] hover:bg-[#010851] duration-300 transition-all"
          />
        </div>
        {/* footer navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-4">
                <h4 className="text-xl underline">Şirketimiz</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300" >Hakkımızda</a>
                    <a href="/" className="block hover:text-gray-300" >Tarihçemiz</a>
                    <a href="/" className="block hover:text-gray-300" >Tesislerimiz</a>
                    <a href="/" className="block hover:text-gray-300" >Markalarımız</a>
                </ul>
            </div>

            <div className="space-y-4 mt-4">
                <h4 className="text-xl underline">Ürünlerimiz</h4>
                <ul className="space-y3">
                    <a href="/" className="block hover:text-gray-300" >Altın</a>
                    <a href="/" className="block hover:text-gray-300" >Kuvars</a>
                    <a href="/" className="block hover:text-gray-300" >Blok</a>
                    <a href="/" className="block hover:text-gray-300" >Pomza</a>
                    <a href="/" className="block hover:text-gray-300" >Perlit</a>
                    <a href="/" className="block hover:text-gray-300" >Rutil</a>
                    <a href="/" className="block hover:text-gray-300" >Hematit</a>
                    <a href="/" className="block hover:text-gray-300" >Garnet</a>
                    <a href="/" className="block hover:text-gray-300" >Silis</a>
                    <a href="/" className="block hover:text-gray-300" >Agrega</a>
                    <a href="/" className="block hover:text-gray-300" >Korund</a>
                </ul>
            </div>

            <div className="space-y-4 mt-4">
                <h4 className="text-xl underline">İletişim</h4>
                <ul className="space-y3">
                    <p className="hover:text-gray-300" >Sart Mah. Pomza Sk. No:40 Salihli/Manisa</p>
                    <p className="hover:text-gray-300" >Tel: +90 236 724 20 21</p>
                    <p className="hover:text-gray-300" >Fax: +90 236 724 30 51</p>
                    
                    
                </ul>
            </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@2024 POMZA EXPORT. Tüm Hakları Saklıdır.</p>
        <div className="flex items-center space-x-5">

        <a href="https://www.linkedin.com/company/pomzaexport/" target="_blank" aria-label="LinkedIn" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300">
            <Linkedin />
          </a>
            <a href="https://facebook.com" target="_blank"  aria-label="Facebook" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300">
            <Facebook />
          </a>
            <a href="https://youtube.com" target="_blank"  aria-label="Youtube" className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300">
                <Youtube />
            </a>
      </div>
      </div>

      
    </div>
  );
}

export default Footer;
