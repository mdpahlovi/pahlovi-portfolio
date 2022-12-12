import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Toastify from "./Components/Toastify";
import DataContext from "./Contexts/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DataContext>
        <App />
        <Toastify />
    </DataContext>
);
