import React from "react";

export default function ProductSliderCard({ name, img }) {
    return (
        <div className="bg-[grey] w-48 md:w-80 h-full rounded flex flex-col relative cursor-pointer overflow-hidden">
            <img className="w-full h-full object-cover" src={img} />
            <span className="absolute bottom-0 left-0 z-10 py-2 w-full flex items-center justify-center bg-[black]/20 text-white text-lg uppercase">
                {name}
            </span>
        </div>
    );
}
