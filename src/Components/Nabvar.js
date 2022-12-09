import React, { useState } from "react";
import ThemeToggle from "../Components/ThemeToggle";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    // Navbar CSS
    const navLink = ({ isActive }) => (isActive ? "font-bold underline" : "");
    const nevMenu = `bg-base-100 md:bg-transparent w-full md:w-auto fixed md:static top-16 left-0 pb-5 md:pb-0 transition-all duration-500 ${
        open ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
    } md:opacity-100 md:translate-x-0`;

    return (
        <>
            <nav className="fixed w-full bg-base-100 shadow-md z-50">
                <div className="my-container h-16 md:h-20 flex justify-between items-center">
                    <Link to="/" className="text-4xl font-bold">
                        Pahlovi
                    </Link>
                    <div className="flex items-center gap-4">
                        <label className="swap swap-rotate md:hidden">
                            <input type="checkbox" onClick={() => setOpen(!open)} />
                            <CgClose className="swap-on text-4xl" />
                            <CgMenuRight className="swap-off text-4xl" />
                        </label>
                        <div className="md:hidden flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className={nevMenu}>
                        <div className="flex flex-col md:flex-row items-center py-3 gap-6">
                            <NavLink to={"/"} className={navLink} end>
                                Home
                            </NavLink>
                            <NavLink to={"/about"} className={navLink}>
                                About
                            </NavLink>
                            <NavLink to={"/services"} className={navLink}>
                                Services
                            </NavLink>
                            <NavLink to={"/projects"} className={navLink}>
                                Projects
                            </NavLink>
                            <NavLink to={"/contact"} className={navLink}>
                                Contact
                            </NavLink>
                            <div className="hidden md:flex">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="h-16 md:h-20 w-full opacity-0"></div>
        </>
    );
};

export default Navbar;
