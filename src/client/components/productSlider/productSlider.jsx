import React from "react";
import ProductSliderCard from "./productSliderCard";

export default function ProductSlider() {
    return (
        <div className="flex justify-between w-full px-36 py-24 h-fit md:h-full">
            <div className="flex items-start h-full">
                <h1 className="text-3xl text-bold">Ürünlerimiz</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 md:w-fit md:h-max">
                <ProductSliderCard
                    name="Quartz"
                    img="/assets/products/quartz.jpg"
                />
                <ProductSliderCard
                    name="Perlit"
                    img="/assets/products/perlit.jpg"
                />
                <ProductSliderCard
                    name="Altın"
                    img="/assets/products/perlit.jpg"
                />
                <ProductSliderCard
                    name="Agrega"
                    img="/assets/products/perlit.jpg"
                />
                <ProductSliderCard
                    name="Garnet"
                    img="/assets/products/perlit.jpg"
                />
                <ProductSliderCard
                    name="Pomza"
                    img="/assets/products/perlit.jpg"
                />
                <ProductSliderCard
                    name="Rutil"
                    img="/assets/products/perlit.jpg"
                />
            </div>
        </div>
    );
}
