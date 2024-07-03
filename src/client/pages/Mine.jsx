import React, { useEffect, useState } from "react";
import ImgCarousel from "../components/imgCarousel";
import { useNavigate, useParams } from "react-router-dom";
import minesJSON from "../../data/mines.json";
import "./css/mine.css";

export default function Mine() {
    const { mineId } = useParams();
    const navigate = useNavigate();
    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");
    const [mineImages, setMineImages] = useState([]);
    const [mineProducts, setMineProducts] = useState([]);

    useEffect(() => {
        const data = minesJSON.find((itm) => itm.id == mineId);
        setHeader(data.name.tr);
        setDescription(data.description.tr);
        setMineImages([...data.images]);
        setMineProducts([...data.products]);
    }, [mineId]);
    return (
        <div className="flex flex-col h-fit w-full items-center overflow-scroll">
            <div className="h-fit overflow-hidden relative">
                <ImgCarousel images={mineImages} />
                <h1
                    className="absolute text-white text-6xl w-fit flex justify-center"
                    style={{ top: "75%", left: "5%", margin: "auto" }}
                >
                    {header}
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="w-full p-14 text-justify">{description}</div>
                <div className="w-full p-14 h-fit grid grid-cols-3 row-auto gap-1 hover:gap-5 duration-200">
                    {mineProducts.map((item, key) => {
                        return (
                            <div
                                key={key}
                                className="overflow-hidden cursor-pointer hover:shadow-lg shadow-black duration-200 productContainer relative"
                                onClick={() => navigate("/product/" + item.id)}
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                ></img>
                                <span className="text-white z-10">
                                    {item.name.tr}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
