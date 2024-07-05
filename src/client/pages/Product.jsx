import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsJSON from "../../data/products.json";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

export default function Product() {
    const { productId } = useParams();
    const [productData, setProductData] = useState(null);

    const [openAcc1, setOpenAcc1] = useState(true);
    const [openAcc2, setOpenAcc2] = useState(false);
    const [openAcc3, setOpenAcc3] = useState(false);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

    useEffect(() => {
        const data = productsJSON.find((itm) => itm.id == productId);
        setProductData(data);
    }, [productId]);

    return (
        <div className="h-fit">
            {productData && (
                <div className="flex flex-col min-h-screen h-fit w-full items-center">
                    <div className="h-[50vh] w-full relative">
                        <img
                            className="w-full h-full object-cover"
                            src={productData.image}
                        ></img>
                        <h1 className="w-full text-4xl font-bold text-white absolute left-0 flex justify-center bottom-0 pb-5">
                            {productData.name.tr}
                        </h1>
                    </div>
                    <div className="p-3 w-full md:w-2/3 h-fit">
                        <Accordion
                            open={openAcc1}
                            animate={CUSTOM_ANIMATION}
                            className="pt-5"
                        >
                            <AccordionHeader onClick={handleOpenAcc1}>
                                Ürün Bilgileri
                            </AccordionHeader>
                            <AccordionBody className="text-md">
                                {productData.description.tr}
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={openAcc2}
                            animate={CUSTOM_ANIMATION}
                            className="pt-5"
                        >
                            <AccordionHeader onClick={handleOpenAcc2}>
                                Kullanım Alanları
                            </AccordionHeader>
                            <AccordionBody className="text-md">
                                {productData.usageAreas.tr}
                            </AccordionBody>
                        </Accordion>
                        {productData.technicalInfo && (
                            <Accordion
                                open={openAcc3}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                            >
                                <AccordionHeader onClick={handleOpenAcc3}>
                                    Teknik Bilgiler
                                </AccordionHeader>
                                <AccordionBody className="flex flex-col text-md">
                                    {productData.technicalInfo
                                        .chemicalFormula && (
                                        <span>
                                            Kimyasal Formül:
                                            {" " +
                                                productData.technicalInfo
                                                    .chemicalFormula}
                                        </span>
                                    )}
                                    {productData.technicalInfo.gravity && (
                                        <span>
                                            Yoğunluk:
                                            {" " +
                                                productData.technicalInfo
                                                    .gravity}
                                        </span>
                                    )}
                                    {productData.technicalInfo.hardness && (
                                        <span>
                                            Sertlik:
                                            {" " +
                                                productData.technicalInfo
                                                    .hardness}
                                        </span>
                                    )}
                                </AccordionBody>
                            </Accordion>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
