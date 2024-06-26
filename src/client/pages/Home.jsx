import React from "react";
import { IntroCarousel } from "../components/introCarousel";
import IntroVideo from "../components/introVideo";
import ProductSlider from "../components/productSlider/productSlider";
import SectionScroller, { SectionPart } from "../components/sectionScroller";
import FacilityBanner, { ProductContainer } from "../components/facilityBanner";

function Home() {
    return (
        <div className="flex flex-col h-fit md:min-w-full md:min-h-max">
            <SectionScroller>
                <SectionPart>
                    <IntroVideo />
                </SectionPart>
                <SectionPart>
                    <FacilityBanner
                        keyNum="1"
                        mainImg="/assets/common/pit.jpg"
                        header="Sart Maden İşletmemiz"
                        content="Pomza Export A.Ş. Salihli Sart bölgesinde
                                kurduğu plaser madeni işletmesi %100 yerli
                                sermaye ve teknoloji kullanılmak suretiyle
                                sektörde ilk altın üreten yerli firma olmuştur.
                                Madencilik sektöründe 40 yılı aşkın elde ettiği
                                tecrübesini inşaat sektörüne ileri teknoloji ve
                                çevreci malzemeler üretmekte kullanan POMZA
                                EXPORT A.Ş. bu maksatla; PERSAN markasıyla
                                perlit beton kiremidi ve EILE POMEX markasıyla
                                ileri teknoloji yapı kimyasallarını inşaat
                                sektörüne kazandırmıştır. Şirketin hedefi;
                                faaliyette bulunduğumuz sektörlerde pazarın
                                beklentilerine cevap verebilecek; koşulsuz
                                müşteri memnuniyeti veren, kaliteli, çevreci,
                                ileri teknoloji ürünler üretmek ve kendini
                                sürekli yinelemektir."
                        direction="left"
                    >
                        <ProductContainer
                            img="/assets/products/quartz.jpg"
                            name="quartz"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/rutil.jpg"
                            name="rutil"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/garnet.jpg"
                            name="garnet"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/silis.jpg"
                            name="perlit"
                            link="/"
                        />
                    </FacilityBanner>
                </SectionPart>
                <SectionPart>
                    <FacilityBanner
                        keyNum="2"
                        mainImg="/assets/common/yenikoy.jpg"
                        header="Yeniköy İşletmemiz"
                        content="Pomza Export A.Ş. Salihli Sart bölgesinde
                                kurduğu plaser madeni işletmesi %100 yerli
                                sermaye ve teknoloji kullanılmak suretiyle
                                sektörde ilk altın üreten yerli firma olmuştur.
                                Madencilik sektöründe 40 yılı aşkın elde ettiği
                                tecrübesini inşaat sektörüne ileri teknoloji ve
                                çevreci malzemeler üretmekte kullanan POMZA
                                EXPORT A.Ş. bu maksatla; PERSAN markasıyla
                                perlit beton kiremidi ve EILE POMEX markasıyla
                                ileri teknoloji yapı kimyasallarını inşaat
                                sektörüne kazandırmıştır. Şirketin hedefi;
                                faaliyette bulunduğumuz sektörlerde pazarın
                                beklentilerine cevap verebilecek; koşulsuz
                                müşteri memnuniyeti veren, kaliteli, çevreci,
                                ileri teknoloji ürünler üretmek ve kendini
                                sürekli yinelemektir."
                        direction="right"
                    >
                        <ProductContainer
                            img="/assets/products/perlit.jpg"
                            name="quartz"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/rutil.jpg"
                            name="rutil"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/garnet.jpg"
                            name="garnet"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/silis.jpg"
                            name="perlit"
                            link="/"
                        />
                    </FacilityBanner>
                </SectionPart>
                <SectionPart>
                    <FacilityBanner
                        keyNum="3"
                        mainImg="/assets/common/kuner.jpg"
                        header="Küner İşletmemiz"
                        content="Pomza Export A.Ş. Salihli Sart bölgesinde
                                kurduğu plaser madeni işletmesi %100 yerli
                                sermaye ve teknoloji kullanılmak suretiyle
                                sektörde ilk altın üreten yerli firma olmuştur.
                                Madencilik sektöründe 40 yılı aşkın elde ettiği
                                tecrübesini inşaat sektörüne ileri teknoloji ve
                                çevreci malzemeler üretmekte kullanan POMZA
                                EXPORT A.Ş. bu maksatla; PERSAN markasıyla
                                perlit beton kiremidi ve EILE POMEX markasıyla
                                ileri teknoloji yapı kimyasallarını inşaat
                                sektörüne kazandırmıştır. Şirketin hedefi;
                                faaliyette bulunduğumuz sektörlerde pazarın
                                beklentilerine cevap verebilecek; koşulsuz
                                müşteri memnuniyeti veren, kaliteli, çevreci,
                                ileri teknoloji ürünler üretmek ve kendini
                                sürekli yinelemektir."
                        direction="left"
                    >
                        <ProductContainer
                            img="/assets/products/quartz.jpg"
                            name="quartz"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/rutil.jpg"
                            name="rutil"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/garnet.jpg"
                            name="garnet"
                            link="/"
                        />
                        <ProductContainer
                            img="/assets/products/silis.jpg"
                            name="perlit"
                            link="/"
                        />
                    </FacilityBanner>
                </SectionPart>
                <SectionPart>
                    <IntroCarousel />
                </SectionPart>
            </SectionScroller>
        </div>
    );
}

export default Home;
