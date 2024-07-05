import React, { useEffect, useLayoutEffect, useState } from "react";
import ImgCarousel from "../components/imgCarousel";
import { useNavigate, useParams } from "react-router-dom";
import minesJSON from "../../data/mines.json";
import productsJSON from "../../data/products.json";
import "./css/mine.css";

export default function Mine() {
    const { mineId } = useParams();
    const navigate = useNavigate();
    const [mobileView, setMobileView] = useState(false);
    const [header, setHeader] = useState("");
    const [description, setDescription] = useState("");
    const [mineImages, setMineImages] = useState([]);
    const [mineProducts, setMineProducts] = useState([]);
    const [productName, setProductName] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [showingImage, setShowingImage] = useState(false);
    const [linkId, setLinkId] = useState(null);

    const mouseOver = (e, name) => {
        setProductName(name);
        if (e.target.src) {
            setImgUrl(e.target.src);
            setShowingImage(true);
        } else {
            setImgUrl(e.target.previousSibling.src);
            setShowingImage(true);
        }
    };

    const mouseLeave = (e) => {
        setProductName(null);
        setShowingImage(false);
    };

    useLayoutEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
    });

    useEffect(() => {
        const data = minesJSON.find((itm) => itm.id == mineId);
        setHeader(data.name.tr);
        setDescription(data.description.tr);
        setMineImages([...data.images]);

        const products = productsJSON.filter(
            (item) => item.facilityId == mineId
        );
        setMineProducts([...products]);
    }, [mineId]);

    useEffect(() => {
        const el = document.getElementById("showImage" + mineId);
        if (showingImage) {
            el.classList.remove("leaveAnim");
            el.classList.add("enterAnim");
            el.style.display = "block";
        } else {
            el.classList.remove("enterAnim");
            el.classList.toggle("leaveAnim");
            setTimeout(() => {
                el.style.display = "none";
                setImgUrl(null);
            }, 300);
        }
    }, [showingImage]);

    return (
        <div className="flex flex-col h-fit w-full items-center overflow-scroll">
            <div
                className="h-fit w-full overflow-hidden relative"
                style={{ height: mobileView ? "50vh" : "70vh" }}
            >
                <ImgCarousel images={mineImages} />
                <h1
                    className="absolute text-white text-3xl md:text-6xl w-fit flex justify-center"
                    style={{
                        top: mobileView ? "85%" : "80%",
                        left: "5%",
                    }}
                >
                    {header}
                </h1>
                <div
                    id={"showImage" + mineId}
                    className="absolute left-0 top-0 w-full h-full bg-black z-200 hidden"
                >
                    <img
                        className="w-full h-full object-cover"
                        src={imgUrl}
                    ></img>
                    {!mobileView && (
                        <span className="text-white z-10 absolute left-10 bottom-10 text-6xl">
                            {productName}
                        </span>
                    )}
                    {mobileView && (
                        <span
                            className="absolute right-0 left-0 mx-auto bottom-5 w-fit h-fit p-2 text-white"
                            style={{ border: "1px solid white" }}
                            onClick={() => navigate("/product/" + linkId)}
                        >
                            Ürün Sayfasına Git...
                        </span>
                    )}
                </div>
            </div>
            <div
                className="w-full py-3 md:py-8 md:pl-3 md:pr-0 px-3 grid grid-cols-2 gap-2 md:gap-0 md:flex md:items-center md:justify-center duration-200"
                style={{ height: mobileView ? "50vh" : "30vh" }}
            >
                {mineProducts.map((item, key) => {
                    return (
                        <div
                            key={key}
                            className="w-full h-full md:max-w-max overflow-hidden cursor-pointer md:mr-1 hover:shadow-lg shadow-black duration-200 productContainer relative"
                            onClick={() => {
                                !mobileView && navigate("/product/" + item.id);
                            }}
                            onMouseOver={(e) => {
                                mouseOver(e, item.name.tr);
                                setLinkId(item.id);
                            }}
                            onMouseLeave={(e) => {
                                mouseLeave(e);
                                setLinkId(null);
                            }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                            ></img>
                            {mobileView && (
                                <span
                                    className="text-white z-10 text-center"
                                    style={{
                                        display: mobileView ? "block" : "",
                                        fontSize: mobileView ? "1.5rem" : "",
                                    }}
                                >
                                    {item.name.tr}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="md:w-1/2 w-full p-3 text-justify">
                {description}
            </div>

            {/* <div className="grid grid-cols-2 gap-2">
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
            </div> */}
        </div>
    );
}
