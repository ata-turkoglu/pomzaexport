import React from "react";

export default function Sustainability() {
    return (
        <div className="bg-[#151a382d] relative w-full h-fit flex flex-col pt-10 md:pt-20 md:pb-10 md:pl-10 md:pr-5">
            <h2 className="text-xl md:text-4xl mb-2 md:mb-5 ml-3 md:ml-0 w-full md:w-2/3 z-30 bg-transparent">
                Yenilenebilir enerji yatırımlarımıza devam ediyoruz. <br></br>
                Sürdürülebilir bir yaşam için gerekli hammaddeleri üretiyoruz.
            </h2>
            <div className="relative w-full h-84 flex flex-col md:flex-row items-center justify-center">
                <div className="relative h-full flex flex-1">
                    <img
                        className="w-auto h-full object-cover"
                        src="/assets/common/sustainability.jpg"
                    />
                </div>
                <div className="md:absolute left-2 bottom-2 h-40 flex flex-1 mb-3 md:mb-0 ml-3 md:ml-0 mr-3 md:mr-5">
                    <img
                        className="w-full h-full object-cover"
                        src="/assets/common/sustainability1.jpg"
                    />
                </div>
            </div>
        </div>
    );
}
