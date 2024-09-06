import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AppProvider } from "./client/context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </AppProvider>
);
