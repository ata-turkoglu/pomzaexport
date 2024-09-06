import React, { useLayoutEffect, useContext, useState } from "react";
import productsJSON from "../../data/products.json";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Products() {
    const navigate = useNavigate();
    const { products, lang } = useContext(AppContext);
    const [data, setData] = useState([]);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);

        let productsData = [];
        products.forEach((item) => {
            const found = productsJSON.find((itm) => itm.id == item.productId);
            console.log(item, found);
            item.bgImage = found.image;
            productsData.push(item);
        });
        setData(productsData);
    }, []);

    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-16 w-100 bg-[#151a38]"></div>
            <div className="grid grid-cols-2 gap-2 p-2">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full relative"
                        onClick={() => {
                            item.link
                                ? window.open(item.link, "_blank")
                                : navigate("/product/" + item.productId);
                        }}
                    >
                        <img
                            src={item.bgImage}
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
                            {lang == "TR"
                                ? item.productName_tr
                                : item.productName_en}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
