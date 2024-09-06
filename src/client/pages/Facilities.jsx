import React, { useLayoutEffect, useContext, useState } from "react";
import minesJSON from "../../data/mines.json";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Facilities() {
    const navigate = useNavigate();
    const { mines, lang } = useContext(AppContext);
    const [data, setData] = useState([]);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);

        let minesData = [];
        mines.forEach((item) => {
            const found = minesJSON.find((itm) => itm.id == item.mineId);
            item.images = found.images;
            minesData.push(item);
        });
        setData(minesData);
    }, []);
    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-16 w-100 bg-[#151a38]"></div>
            <div className="flex flex-col p-2">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full relative mb-2 cursor-pointer"
                        onClick={() => navigate("/mine/" + item.mineId)}
                    >
                        <img
                            src={item.images[0]}
                            className="w-full h-full objecj-cover brightness-75"
                        />
                        <span
                            className="text-white z-10 absolute left-0 top-0 right-0 bottom-0 m-auto text-center t-shadow"
                            style={{
                                display: "block",
                                fontSize: "1.8rem",
                                alignSelf: "center",
                                justifySelf: "center",
                            }}
                        >
                            {item.province} / {item.district} <br></br>
                            {lang == "TR" ? item.mineName_tr : item.mineName_en}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Facilities;
