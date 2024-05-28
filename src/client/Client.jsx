import React from "react";
import Header from "./components/header.jsx";
import { Outlet } from "react-router-dom";

function Client() {
    return (
        <div className="client">
            <Header />
            <Outlet />
        </div>
    );
}

export default Client;