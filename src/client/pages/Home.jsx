import React from "react";
import { IntroCarousel } from "../components/introCarousel";
import IntroVideo from "../components/introVideo";
import ProductSlider from "../components/productSlider/productSlider";
import SectionScroller, { SectionPart } from "../components/sectionScroller";
import FacilityBanner from "../components/facilityBanner";
import Footer from "../components/footer";

function Home() {
    return (
        <div className="flex flex-col h-fit md:min-w-full md:min-h-max">
            <SectionScroller>
                <SectionPart>
                    <IntroVideo />
                </SectionPart>
                <SectionPart>
                    <FacilityBanner
                        mineId="1"
                        direction="left"
                    ></FacilityBanner>
                </SectionPart>
                <SectionPart>
                    <FacilityBanner
                        mineId="2"
                        direction="right"
                    ></FacilityBanner>
                </SectionPart>
                <SectionPart>
                    <FacilityBanner
                        mineId="3"
                        direction="left"
                    ></FacilityBanner>
                </SectionPart>
                <SectionPart>
                    <IntroCarousel />
                </SectionPart>
                <SectionPart>
                    <Footer hFull={true} />
                </SectionPart>
            </SectionScroller>
        </div>
    );
}

export default Home;
