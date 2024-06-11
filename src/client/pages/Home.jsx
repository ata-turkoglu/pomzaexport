import React from "react";
import { IntroCarousel } from "../components/introCarousel";
import ProductSlider from "../components/productSlider/productSlider";

function Home() {
    return (
        <div className="flex flex-col h-fit md:min-w-full md:min-h-max">
            <section id="section-1">
                <div className="h-full overflow-hidden hidden md:block">
                    <video
                        autoPlay={true}
                        muted
                        style={{
                            filter: "brightness(50%)",
                        }}
                    >
                        <source
                            src="/assets/video/pmzaltin.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="h-screen md:hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="/assets/common/view.jpg"
                        style={{
                            filter: "brightness(70%)",
                            objectPosition: "40%",
                        }}
                    />
                </div>
            </section>
            <section id="section-2">
                <ProductSlider />
            </section>
            <section id="section-3">
                <IntroCarousel />
            </section>
        </div>
    );
}

export default Home;
