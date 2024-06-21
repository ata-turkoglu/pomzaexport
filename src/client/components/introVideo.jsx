import React from "react";
import TextTransitions from "./textTransitions";

export default function IntroVideo() {
    return (
        <div>
            <div className="h-full overflow-hidden hidden md:block">
                <video
                    autoPlay={true}
                    muted
                    style={{
                        filter: "brightness(50%)",
                    }}
                >
                    <source src="/assets/video/pmzaltin.mp4" type="video/mp4" />
                </video>
                <TextTransitions />
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
        </div>
    );
}
