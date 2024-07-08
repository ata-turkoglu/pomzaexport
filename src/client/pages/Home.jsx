import React, { useLayoutEffect } from "react";
import IntroVideo from "../components/introVideo";
import Facilities from "../components/facilities";
import Brands from "../components/brands";
import Sustainability from "../components/sustainability";

function Home() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col h-fit md:min-w-full md:min-h-max">
            <IntroVideo />
            <Facilities />
            <Sustainability />
            <Brands />
        </div>
    );
}

export default Home;
