import React from "react";
import productsJSON from "../../data/products.json";
import { useNavigate } from "react-router-dom";

function Products() {
    const navigate = useNavigate();
    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-16 w-100 bg-[#252525]"></div>
            <div className="grid grid-cols-2 gap-2 p-2">
                {productsJSON.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full relative"
                        onClick={() => navigate("/product/" + item.id)}
                    >
                        <img
                            src={item.image}
                            className="w-full h-full objecj-cover"
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

export default Products;
