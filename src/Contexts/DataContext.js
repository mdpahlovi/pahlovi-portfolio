import React, { createContext, useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

export const LoadData = createContext();

const DataContext = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [services, setServices] = useState([]);
    const [projectLoading, setProjectLoading] = useState(true);
    const [serviceLoading, setServiceLoading] = useState(true);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => {
                setProjectLoading(false);
                setProjects(data);
            });
    }, []);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => {
                setServiceLoading(false);
                setServices(data);
            });
    }, []);

    // Get Theme Value
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);
    const data = { services, projects, theme, setTheme };

    if (projectLoading || serviceLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <CirclesWithBar height="100" width="100" color="#9615DB" />
            </div>
        );
    } else {
        return <LoadData.Provider value={data}>{children}</LoadData.Provider>;
    }
};

export default DataContext;
