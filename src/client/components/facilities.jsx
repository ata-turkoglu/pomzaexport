import React from "react";
import mineJSON from "../../data/mines.json";
import { useNavigate } from "react-router-dom";

export default function Facilities() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#151a381a] relative w-full h-fit flex flex-col pt-10 md:pt-20 md:pb-10 md:pl-10 md:pr-5">
            <div className="w-full h-fit flex">
                <h2 className="text-xl md:text-4xl mb-2 md:mb-5 ml-3 md:ml-0 w-full md:w-1/3 z-30 bg-transparent">
                    Birçok farklı sektöre <br></br> ilgili kalite standartları
                    ile <br></br>hammaddeler ürettiğimiz <br></br>
                    işletmelerimizi ve ürünlerimizi inceleyin
                </h2>
            </div>
            <div className="w-full h-84 flex flex-col md:flex-row items-center justify-center">
                {mineJSON.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => navigate("/mine/" + item.id)}
                        className="relative h-full flex flex-1 mb-3 md:mb-0 ml-3 md:ml-0 mr-3 md:mr-5 cursor-pointer duration-300 hover:shadow-xl shadow-black hover:-translate-y-2"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={item.mineBgImage}
                        />
                        <h3 className="absolute w-full left-0 bottom-0 px-3 pt-3 pb-1 text-white text-2xl t-shadow font-extrabold">
                            {item.location} <br></br>
                            {item.name.tr}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
