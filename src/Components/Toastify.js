import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toastify = () => {
    return <ToastContainer position="top-right" autoClose={3000} theme="light" />;
};

export default Toastify;