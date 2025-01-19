import React, { useEffect, useState, useLayoutEffect } from "react";
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
        const data = productsJSON.find((itm) => itm.id == productId);
        setSelectedImg(data.image);
        setProductData(data);
    }, [productId]);

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
                            {productData.name.tr}
                        </h1>
                    </div>
                    <div className="p-3 w-full md:w-2/3 h-fit">
                        {productData.id == 7 && (
                            <div>
                                <h3 className="font-semibold text-xl font-sans text-blue-gray-900 transition-colors">
                                    Perlit Nedir?
                                </h3>
                                <br />
                                <span className="text-gray-700">
                                    Perlit, volkanik camın ısıl işlemle
                                    genleştirilmesi sonucu elde edilen,
                                    gözenekli bir yapıya sahip, hafif ve çok
                                    yönlü bir mineraldir. Şirketimiz,
                                    Türkiye'nin en geniş perlit sahasında
                                    yenilikçi ve sürdürülebilir perlit üretim
                                    yapmaktadır. Türlü kalibrasyonlarda ham ve
                                    genleşmiş; ve mikronize perlit ürünlerini
                                    ETİPER markası ile pazara sunmaktadır.
                                </span>
                                <br />
                                <br />
                                <span className="text-gray-700">
                                    ETİPER perliti, ileri teknoloji
                                    tesislerimizde işlenerek tarım, inşaat,
                                    filtrasyon, döküm ve gıda gibi birçok
                                    sektörde kullanılabilecek yüksek kaliteli
                                    ürünler haline getirilir.
                                </span>
                            </div>
                        )}
                        {productData.id == 7 ? (
                            <Accordion
                                open={openAcc1}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={1} open={openAcc1} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc1}>
                                    Ürün Bilgileri
                                </AccordionHeader>
                                <AccordionBody className="text-md">
                                    <ul>
                                        <li className="mb-3">
                                            <strong>Tozsuzdur: </strong>Kullanım
                                            esnasında kolaylık sağlar.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                İdeal Tane Boyutu ve Gözenek
                                                Yapısı:{" "}
                                            </strong>
                                            İleri teknoloji ile üretilir,
                                            homojen ve standart kalite sağlar.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                Sterildir ve Hastalıklardan
                                                Aridir:{" "}
                                            </strong>
                                            Güvenli bir ortam sağlar, hastalık
                                            taşımaz ve yaymaz.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                İnorganiktir ve Uzun Ömürlüdür:{" "}
                                            </strong>
                                            Dayanıklı bir yapıya sahiptir.
                                        </li>
                                        <li className="mb-3">
                                            <strong>%100 Yerli Üretim: </strong>
                                            Türkiye'nin zengin kaynaklarından
                                            elde edilmiştir.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                Bitki Sağlığına Destek:{" "}
                                            </strong>
                                            Tarım perliti kök izolasyonu sağlar,
                                            kök dostudur ve tüm bitki
                                            çeşitlerinde yüksek verimlilik elde
                                            edilmesine yardımcı olur.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                Fiyat/Performans Oranı
                                                Yüksektir:{" "}
                                            </strong>
                                            Standart kalite ile tam homojenlik
                                            sağlar.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                Sulama İhtiyacını Azaltır:{" "}
                                            </strong>
                                            Su tasarrufu sağlar.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                Sterilizasyon Sonrası Tekrar
                                                Kullanılabilir:{" "}
                                            </strong>
                                            Dayanıklı ve yeniden kullanılabilir
                                            bir üründür.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                Kullanıma Hazır Ambalajda ve
                                                Zamanında Teslim:{" "}
                                            </strong>
                                            Her teslimat özenle hazırlanarak
                                            zamanında yapılır.
                                        </li>
                                        <li className="mb-3">
                                            <strong>
                                                İhracat potansiyeline sahiptir:{" "}
                                            </strong>
                                            Hollanda, İspanya ve Hindistan başta
                                            olmak üzere birçok ülkeye ihraç
                                            edilmektedir.
                                        </li>
                                    </ul>
                                </AccordionBody>
                            </Accordion>
                        ) : (
                            <Accordion
                                open={openAcc1}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={1} open={openAcc1} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc1}>
                                    Ürün Bilgileri
                                </AccordionHeader>
                                <AccordionBody className="text-md">
                                    {typeof productData.description.tr ==
                                    "string" ? (
                                        productData.description.tr
                                    ) : (
                                        <ul>
                                            {productData.description.tr.map(
                                                (itm, indx) => (
                                                    <li
                                                        key={indx}
                                                        className="mb-2"
                                                    >
                                                        {itm}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </AccordionBody>
                            </Accordion>
                        )}
                        {productData.images.length > 0 && (
                            <Accordion
                                open={openAcc2}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={2} open={openAcc2} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc2}>
                                    Ürün Resimleri
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
                        {productData.usageAreas.tr && (
                            <Accordion
                                open={openAcc3}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={3} open={openAcc3} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc3}>
                                    Kullanım Alanları
                                </AccordionHeader>
                                {/* <AccordionBody className="text-md">
                                    {productData.usageAreas.tr}
                                </AccordionBody> */}
                                <AccordionBody className="text-md">
                                    {typeof productData.usageAreas.tr ==
                                    "string" ? (
                                        productData.usageAreas.tr
                                    ) : (
                                        <ul>
                                            {productData.usageAreas.tr.map(
                                                (itm, indx) => (
                                                    <li
                                                        key={indx}
                                                        className="mb-3"
                                                    >
                                                        {itm}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </AccordionBody>
                            </Accordion>
                        )}
                        {productData.id == 7 && (
                            <Accordion
                                open={openAcc3}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={3} open={openAcc3} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc3}>
                                    Kullanım Alanları
                                </AccordionHeader>
                                <AccordionBody className="text-md">
                                    <ul>
                                        <li className="mb-3">
                                            <strong>
                                                Tarım ve Bahçecilik:{" "}
                                            </strong>
                                            Toprak düzenleyici olarak
                                            kullanılır. Bitkilerin kök
                                            izolasyonunu sağlar, su tutma
                                            kapasitesini artırır ve toprağın
                                            havalanmasını sağlar. Bitki
                                            sağlığını destekler ve yüksek
                                            verimlilik elde edilmesine yardımcı
                                            olur.
                                        </li>
                                        <li className="mb-3">
                                            <strong>İnşaat: </strong>Hafif dolgu
                                            malzemesi olarak kullanılarak
                                            binaların ısı yalıtım özelliklerini
                                            artırır. Yeniköy perlit sahamızın
                                            sert ve dayanıklı perliti, inşaat
                                            sektörü için en uygun perlit
                                            yapısını sunar. ETİPER inşaat
                                            perliti, birçok sektör lideri
                                            tarafından tercih edilmektedir.{" "}
                                        </li>
                                        <li className="mb-3">
                                            <strong>Filtrasyon: </strong>
                                            Sıvıların arıtılması ve
                                            saflaştırılması süreçlerinde yaygın
                                            olarak kullanılır. Kimyasallardan
                                            organik maddelere kadar geniş bir
                                            filtreleme kapasitesine sahiptir.
                                        </li>
                                        <li className="mb-3">
                                            <strong>Döküm: </strong>Döküm
                                            kalıplarında ısıya dayanıklılık
                                            sağlamak için kullanılır.
                                        </li>
                                        <li className="mb-3">
                                            <strong>Gıda: </strong>Gıda işleme
                                            ve depolama süreçlerinde yardımcı
                                            bir malzeme olarak tercih edilir.
                                        </li>
                                    </ul>
                                </AccordionBody>
                            </Accordion>
                        )}
                        {productData.productVariety.tr && (
                            <Accordion
                                open={openAcc3}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={3} open={openAcc3} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc3}>
                                    Ürün Çeşitleri
                                </AccordionHeader>
                                <AccordionBody className="text-md">
                                    {productData.productVariety.tr}
                                </AccordionBody>
                            </Accordion>
                        )}
                        {productData.technicalInfo && (
                            <Accordion
                                open={openAcc4}
                                animate={CUSTOM_ANIMATION}
                                className="pt-5"
                                icon={<Icon id={4} open={openAcc4} />}
                            >
                                <AccordionHeader onClick={handleOpenAcc4}>
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
