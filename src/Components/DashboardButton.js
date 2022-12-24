import React from "react";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter } from "../Utilities/formate";

const DashboardButton = ({ dashboardPath }) => {
    const { path, icon, end } = dashboardPath;

    const link = ({ isActive }) => (isActive ? "p-1.5 bg-primary flex items-center rounded-lg font-bold text-white" : "px-1.5 flex items-center");
    const nav_icon = ({ isActive }) => (
        <>
            <div className={isActive ? "db-icon text-primary bg-white text-xl" : "db-icon"}>{icon}</div>
            <span>{capitalizeFirstLetter(path)}</span>
        </>
    );

    if (end) {
        return (
            <NavLink to="/dashboard" className={link} end>
                {nav_icon}
            </NavLink>
        );
    } else {
        return (
            <NavLink to={path} className={link}>
                {nav_icon}
            </NavLink>
        );
    }
};

export default DashboardButton;
