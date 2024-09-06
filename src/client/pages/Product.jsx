import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import productsJSON from "../../data/products.json";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { AppContext } from "../context/AppContext";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
    return (
        <svg
            id={"icon" + id}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export default function Product() {
    const { products, lang } = useContext(AppContext);
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [selectedImg, setSelectedImg] = useState(null);
    const [fullView, setFullView] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    const [openAcc1, setOpenAcc1] = useState(true);
    const [openAcc2, setOpenAcc2] = useState(true);
    const [openAcc3, setOpenAcc3] = useState(true);
    const [openAcc4, setOpenAcc4] = useState(true);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
    const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);

    useLayoutEffect(() => {
        if (window.innerWidth < 768) {
            setMobileView(true);
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const dbProduct = products.find((itm) => itm.productId == productId);
        const data = productsJSON.find((itm) => itm.id == productId);
        dbProduct.bgImage = data.image;
        dbProduct.images = data.images;
        setSelectedImg(dbProduct.bgImage);
        setProductData(dbProduct);
    }, [productId]);

    const setTechnicalInfo = (data, lang) => {
        const pData =
            lang == "TR" ? data.technicalInfo_tr : data.technicalInfo_en;
        if (!pData) return null;
        let keys = [];
        let vals = [];
        pData.forEach((item) => {
            keys.push(Object.keys(item)[0]);
            vals.push(Object.values(item)[0]);
        });
        return (
            <Accordion
                open={openAcc4}
                animate={CUSTOM_ANIMATION}
                className="pt-5"
                icon={<Icon id={4} open={openAcc4} />}
            >
                <AccordionHeader onClick={handleOpenAcc4}>
                    {lang == "TR" ? "Teknik Bilgiler" : "Technical Info"}
                </AccordionHeader>
                <AccordionBody className="flex flex-col text-md">
                    {keys.map((item, index) => {
                        return (
                            <div key={index}>
                                <span className="mr-2">{item}:</span>
                                <span>{vals[index]}</span>
                            </div>
                        );
                    })}
                    {/* {productData.technicalInfo.chemicalFormula && (
                        <span>
                            Kimyasal Formül:
                            {" " + productData.technicalInfo.chemicalFormula}
                        </span>
                    )}
                    {productData.technicalInfo.gravity && (
                        <span>
                            Yoğunluk:
                            {" " + productData.technicalInfo.gravity}
                        </span>
                    )}
                    {productData.technicalInfo.hardness && (
                        <span>
                            Sertlik:
                            {" " + productData.technicalInfo.hardness}
                        </span>
                    )} */}
                </AccordionBody>
            </Accordion>
        );
    };

    return (
        <div className="h-fit">
            {productData && (
                <div className="flex flex-col min-h-screen h-fit w-full items-center">
                    <div
                        className="w-full relative duration-300"
                        style={{
                            height: fullView && !mobileView ? "100vh" : "50vh",
                        }}
                    >
                        <img
                            className="w-full h-full object-cover brightness-90"
                            src={selectedImg}
                            loading="lazy"
                        ></img>
                        <h1 className="w-full text-4xl font-bold text-white absolute left-0 flex justify-center bottom-0 pb-5">
                            {lang == "TR"
                                ? productData.productName_tr
                                : productData.productName_en}
                        </h1>
                    </div>
                    <div className="p-3 w-full md:w-2/3 h-fit">
                        <Accordion
                            open={openAcc1}
                            animate={CUSTOM_ANIMATION}
                            className="pt-5"
                            icon={<Icon id={1} open={openAcc1} />}
                        >
                            <AccordionHeader onClick={handleOpenAcc1}>
                                {lang == "TR"
                                    ? "Ürün Bilgileri"
                                    : "Product Information"}
                            </AccordionHeader>
                            <AccordionBody className="text-md">
                                {lang == "TR"
                                    ? productData.description_tr
                                    : productData.description_en}
                                {/* {typeof productData.description_tr ==
                                "string" ? (
                                    {lang=='TR'?productData.description_tr:productData.description_en}
                                ) : (
                                    <ul>
                                        {productData.description.tr.map(
                                            (itm, indx) => (
                                                <li key={indx}>{itm}</li>
                                            )
                                        )}
                                    </ul>
                                )} */}
                            </AccordionBody>
                        </Accordion>
                        {productData.images.length > 0 && (
                            <Accordion
                                open={openAcc2}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={2} open={openAcc2} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc2}>
                                    {lang == "TR"
                                        ? "Ürün Resimleri"
                                        : "Product Images"}
                                </AccordionHeader>
                                <AccordionBody className="h-full w-full grid grid-cols-3 gap-1 md:gap-0 md:flex md:items-center md:justify-center ">
                                    {productData.images.map((item, indx) => (
                                        <div
                                            key={indx}
                                            className="h-full w-full md:max-w-52 md:mx-1 cursor-pointer overflow-hidden"
                                            onClick={() => {
                                                setOpenAcc1(false);
                                                setSelectedImg(item);
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <img
                                                className="w-full h-full object-cover"
                                                src={item}
                                            ></img>
                                        </div>
                                    ))}
                                </AccordionBody>
                            </Accordion>
                        )}
                        {productData.areasOfUsage_tr && (
                            <Accordion
                                open={openAcc3}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={3} open={openAcc3} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc3}>
                                    {lang == "TR"
                                        ? "Kullanım Alanları"
                                        : "Areas Of Usage"}
                                </AccordionHeader>
                                <AccordionBody className="text-md">
                                    {/* productData.areasOfUsage_tr */}
                                    <ul>
                                        {productData[
                                            "areasOfUsage_" + lang.toLowerCase()
                                        ].map((itm, indx) => (
                                            <li key={indx}>{itm}</li>
                                        ))}
                                    </ul>
                                </AccordionBody>
                            </Accordion>
                        )}
                        {productData.productVariety && (
                            <Accordion
                                open={openAcc3}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={3} open={openAcc3} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc3}>
                                    {lang == "TR"
                                        ? "Ürün Çeşitleri"
                                        : "Product Variety"}
                                </AccordionHeader>
                                <AccordionBody className="text-md">
                                    {productData.productVariety}
                                </AccordionBody>
                            </Accordion>
                        )}
                        {setTechnicalInfo(productData, lang)}
                    </div>
                </div>
            )}
        </div>
    );
}
