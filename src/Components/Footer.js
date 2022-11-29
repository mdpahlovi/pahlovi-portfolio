import React from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneInboundFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="px-6 py-10 space-y-4 bg-base-content/5">
            <Link to="/" className="text-4xl font-bold text-center">
                <h1>Pahlovi</h1>
            </Link>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                <Link>Home</Link>
                <Link>Features</Link>
                <Link>Get started</Link>
                <Link>About us</Link>
            </div>
            <div className="m-auto flex w-max items-center justify-between space-x-4">
                <Link to="tel:+01736817612">
                    <BsFillTelephoneInboundFill />
                </Link>
                <Link className="text-2xl">
                    <MdEmail />
                </Link>
                <Link className="text-xl">
                    <FaGithub />
                </Link>
                <Link className="text-xl">
                    <SiLinkedin />
                </Link>
                <Link className="text-xl">
                    <BsFacebook />
                </Link>
            </div>

            <div className="text-center">
                <span className="text-sm tracking-wide">
                    Copyright © Pahlovi <span id="year"></span> | All right reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
