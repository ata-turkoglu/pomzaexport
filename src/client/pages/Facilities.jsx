import React from "react";
import minesJSON from "../../data/mines.json";
import { useNavigate } from "react-router-dom";

function Facilities() {
    const navigate = useNavigate();
    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-16 w-100 bg-[#252525]"></div>
            <div className="flex flex-col p-2">
                {minesJSON.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full relative mb-2 cursor-pointer"
                        onClick={() => navigate("/mine/" + item.id)}
                    >
                        <img
                            src={item.images[0]}
                            className="w-full h-full objecj-cover brightness-75"
                        />
                        <span
                            className="text-white z-10 absolute left-0 top-0 right-0 bottom-0 m-auto text-center"
                            style={{
                                display: "block",
                                fontSize: "1.8rem",
                                alignSelf: "center",
                                justifySelf: "center",
                            }}
                        >
                            {item.name.tr}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Facilities;