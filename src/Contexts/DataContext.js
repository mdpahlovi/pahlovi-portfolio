import React, { createContext, useEffect, useState } from "react";

export const LoadData = createContext();

const DataContext = ({ children }) => {
    // Get Theme Value
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);
    const data = { theme, setTheme };

    return <LoadData.Provider value={data}>{children}</LoadData.Provider>;
};

export default DataContext;
