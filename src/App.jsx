import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./client/pages/Home";
import Products from "./client/pages/Products";
import Product from "./client/pages/Product";
import About from "./client/pages/About";
import Docs from "./client/pages/Docs";
import Contact from "./client/pages/Contact";
import Client from "./client/Client";
import Mine from "./client/pages/Mine";

function App() {
    return (
        <div className="overflow-hidden">
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
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/mine/:mineId" element={<Mine />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
