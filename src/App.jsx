import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./client/pages/Home";
import Products from "./client/pages/Products";
import Product from "./client/pages/Product";
import About from "./client/pages/About";
import Docs from "./client/pages/Docs";
import Facilities from "./client/pages/Facilities";
import Contact from "./client/pages/Contact";
import Client from "./client/Client";
import Mine from "./client/pages/Mine";
import { AppContext } from "./client/context/AppContext.jsx";
import { Spinner } from "@material-tailwind/react";
function App() {
    const { siteReady } = React.useContext(AppContext);

    return (
        <div className="overflow-hidden">
            {siteReady ? (
                <Routes>
                    <Route path="/" element={<Client />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                        <Route
                            path="/product/:productId"
                            element={<Product />}
                        ></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/docs" element={<Docs />}></Route>
                        <Route
                            path="/facilities"
                            element={<Facilities />}
                        ></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/mine/:mineId" element={<Mine />}></Route>
                    </Route>
                </Routes>
            ) : (
                <div className="w-full h-screen flex items-center justify-center">
                    <Spinner className="h-16 w-16 text-gray-900/50" />
                </div>
            )}
        </div>
    );
}

export default App;
