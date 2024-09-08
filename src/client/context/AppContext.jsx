import { createContext, useLayoutEffect, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [mines, setMines] = useState(null);
    const [products, setProducts] = useState(null);
    const [websiteData, setWebsiteData] = useState(null);
    const [siteReady, setSiteReady] = useState(false);
    const [lang, setLang] = useState("TR");

    const fetchData = async () => {
        const url = process.env.VITE_SERVER_URL + "/website/getAllTexts";
        const res = await axios.get(url).then((res) => res.data);

        setWebsiteData(res.website);
        setProducts(res.products);
        setMines(res.mines);
    };

    useLayoutEffect(() => {
        const lang = window.localStorage.getItem("lang");
        if (lang) setLang(lang);
        fetchData();
    }, []);

    useEffect(() => {
        if (websiteData && products && mines) {
            setSiteReady(true);
        }
    }, [websiteData, products, mines]);

    useEffect(() => {
        window.localStorage.setItem("lang", lang);
    }, [lang]);

    return (
        <AppContext.Provider
            value={{ mines, products, websiteData, siteReady, lang, setLang }}
        >
            {children}
        </AppContext.Provider>
    );
};
