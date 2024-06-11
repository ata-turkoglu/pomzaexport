import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Outlet } from "react-router-dom";

function Client() {
    const toBottom = () => {
        window.scrollBy({
            top: 3000,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="flex flex-col">
            <div className="flex flex-col h-max overflow-hidden">
                <Header toBottom={toBottom} />
                <Outlet className="h-max" />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}

export default Client;
