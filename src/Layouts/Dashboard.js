import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillPieChart, AiFillMessage } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { GoSignIn, GoSignOut } from "react-icons/go";

const DashboardLayout = () => {
    return (
        <section className="my-container section-gap grid grid-cols-[3fr_9fr]">
            <div className="flex flex-col">
                <Link to="/" className="text-4xl font-bold mb-6">
                    Pahlovi
                </Link>
                <button className="btn btn-ghost justify-start gap-2">
                    <AiFillPieChart className="text-xl" /> DeshBoard
                </button>
                <button className="btn btn-ghost justify-start gap-2">
                    <AiFillMessage className="text-xl" /> Inbox
                </button>
                <button className="btn btn-ghost justify-start gap-2">
                    <FaUserSecret className="text-xl" /> Users
                </button>
                <button className="btn btn-ghost justify-start gap-2">
                    <HiShoppingBag className="text-xl" /> Products
                </button>
                <button className="btn btn-ghost justify-start gap-2">
                    <GoSignIn className="text-xl" /> Sign In
                </button>
                <button className="btn btn-ghost justify-start gap-2">
                    <GoSignOut className="text-xl" /> Sign Up
                </button>
            </div>
            <Outlet />
        </section>
    );
};

export default DashboardLayout;
