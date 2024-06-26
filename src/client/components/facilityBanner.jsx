import React, { useEffect, useLayoutEffect, useState } from "react";
import "./css/facilityBanner.css";

export function ProductContainer({ img, name, link }) {}

export default function FacilityBanner({
    keyNum,
    mainImg,
    direction,
    header,
    content,
    children,
}) {
    const [products, setProducts] = useState();
    const [mobileView, setMobileView] = useState(false);
    const [showingImage, setShowingImage] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const mouseOver = (e) => {
        if (e.target.src) {
            setImgUrl(e.target.src);
            setShowingImage(true);
        } else {
            setImgUrl(e.target.previousSibling.src);
            setShowingImage(true);
        }
    };

    const mouseLeave = (e) => {
        setShowingImage(false);
    };

    useLayoutEffect(() => {
        setShowingImage(false);
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
        const list = children.map((item, index) => {
            const { img, name, link } = item.props;
            return (
                <div
                    key={index}
                    onClick={() => {
                        /*link*/
                    }}
                    className="relative cursor-pointer hover:-translate-y-2 duration-300"
                    style={{
                        width: "150px",
                        height: "120px",
                    }}
                    onMouseOver={mouseOver}
                    onMouseLeave={mouseLeave}
                >
                    <img src={img} className="w-full h-full object-contain" />
                    <span
                        className="absolute inset-x-0 mx-auto w-3/4 bg-white text-center shadow-lg capitalize"
                        style={{ bottom: "-10px", border: "1px solid grey" }}
                    >
                        {name}
                    </span>
                </div>
            );
        });

        setProducts(list);
    }, []);

    useEffect(() => {
        const el = document.getElementById("showImage" + keyNum);
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
        <div
            className="h-screen w-full flex md:items-center relative"
            style={{
                flexDirection: direction == "right" ? "row-reverse" : "row",
            }}
        >
            <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
                <img
                    className="h-full w-full object-cover z-0"
                    src={mainImg}
                    style={{ filter: "brightness(80%)" }}
                ></img>

                {/* info */}
                <div
                    id="info"
                    className="text-[#010851] absolute mx-auto left-0 right-0 z-10 h-full w-11/12 md:h-1/2 md:w-full bg-white flex flex-col p-4 md:p-7 overflow-hidden"
                    style={{
                        boxShadow: "0 0 10px grey",
                        top: mobileView ? "70%" : "100px",
                        left: !mobileView
                            ? direction == "right"
                                ? "-170%"
                                : "85%"
                            : "",
                        opacity: mobileView ? ".95" : "1",
                        border: "1px solid #010851",
                    }}
                >
                    <div className="h-full flex flex-col justify-between">
                        <div className="w-full">
                            <h2 className="text-xl md:text-2xl text-center mb-3 md:mb-7 flex flex-col">
                                {header}
                            </h2>
                            <span className="text-justify text-sm md:text-md h-3/4 md:h-fit overflow-y-scroll">
                                {content}
                            </span>
                        </div>
                        <div className="w-full flex items-center justify-end">
                            <span className="cursor-pointer drop-shadow">
                                Detaylı Bilgi
                            </span>
                        </div>
                    </div>
                    <div
                        id={"showImage" + keyNum}
                        className="absolute left-0 top-0 w-full h-full bg-black z-20 hidden"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={imgUrl}
                        ></img>
                    </div>
                </div>
            </div>

            {/* products */}
            <div
                className="absolute px-6 w-full h-fit flex items-center"
                style={{
                    top: mobileView ? "83%" : "75%",
                    justifyContent: direction == "left" ? "end" : "start",
                }}
            >
                {products}
            </div>
        </div>
    );
}
