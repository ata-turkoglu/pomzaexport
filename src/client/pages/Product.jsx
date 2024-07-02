import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsJSON from "../../data/products.json";

export default function Product() {
    const { productId } = useParams();
    const [header, setHeader] = useState("");
    useEffect(() => {
        const data = productsJSON.find((itm) => itm.id == productId);
        setHeader(data.name.tr);
    }, [productId]);
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">{header}</h1>
        </div>
    );
}
