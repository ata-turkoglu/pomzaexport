import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./client/components/header";
import Home from "./client/pages/Home";
import Products from "./client/pages/Products";
import About from "./client/pages/About";
import Docs from "./client/pages/Docs";
import Contact from "./client/pages/Contact";
import Client from "./client/Client";

function App() {
    return (
        <div className="overflow-hidden">
            <Routes>
                <Route path="/" element={<Client />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/docs" element={<Docs />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
