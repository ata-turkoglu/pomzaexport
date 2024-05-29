import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { Outlet } from "react-router-dom";

function Client() {
    return (
        <div className="client">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Client;