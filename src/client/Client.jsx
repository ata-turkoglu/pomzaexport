import React, { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

function Client() {
    const route = useLocation();
    const [footerState, setFooterState] = useState();
    const toBottom = () => {
        window.scrollBy({
            top: 3000,
            left: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        route.pathname == "/" ? setFooterState(false) : setFooterState(true);
        window.scrollTo(0, 0);
    }, [route]);
    return (
        <div className="flex flex-col h-max overflow-hidden">
            {/* <div className="flex flex-col overflow-hidden">
            <div className="flex flex-col h-max overflow-hidden">
                <Header toBottom={toBottom} bgTransparent={footerState} />
                <Outlet className="h-max" />
            </div>
            {footerState && (
                <div className="w-full">
                    <Footer />
                </div>
            )}
        </div> */}
            <Header toBottom={toBottom} bgTransparent={footerState} />
            <Outlet className="h-max" />
            <Footer />
        </div>
    );
}

export default Client;
