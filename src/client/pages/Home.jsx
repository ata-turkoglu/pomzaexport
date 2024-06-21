import React from "react";
import { IntroCarousel } from "../components/introCarousel";
import IntroVideo from "../components/introVideo";
import ProductSlider from "../components/productSlider/productSlider";
import SectionScroller, { SectionPart } from "../components/sectionScroller";

function Home() {
    return (
        <div className="flex flex-col h-fit md:min-w-full md:min-h-max">
            <SectionScroller>
                <SectionPart>
                    <IntroVideo />
                </SectionPart>
                <SectionPart>
                    <ProductSlider />
                </SectionPart>
                <SectionPart>
                    <IntroCarousel />
                </SectionPart>
            </SectionScroller>
        </div>
    );
}

export default Home;
