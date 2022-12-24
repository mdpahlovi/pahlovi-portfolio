import React from "react";
import { AiFillShop, AiFillProject } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DashboardButton from "../Components/DashboardButton";

const dashboardPaths = [
    { path: "dashboard", icon: <AiFillShop />, end: true },
    { path: "projects", icon: <AiFillProject /> },
    { path: "users", icon: <FaUserSecret /> },
];

const DashboardLayout = () => {
    return (
        <>
            <div className="fixed w-full h-16 border-b"></div>
            <main className="pt-16 grid grid-cols-[14rem_auto]">
                <aside className="p-6 min-h-screen overflow-y-auto border-r">
                    <div className="mt-6 text-center">
                        <img src="https://i.ibb.co/7pGv73K/Pahlovi.png" alt="" className="mx-auto rounded-full h-28 w-28" />
                        <h5 className="mt-4 text-xl font-semibold">MD Pahlovi</h5>
                        <span className="opacity-70">Admin</span>
                    </div>
                    <div className="mt-4 border-t pt-4 flex flex-col gap-4">
                        {dashboardPaths.map((dashboardPath, index) => (
                            <DashboardButton key={index} dashboardPath={dashboardPath} />
                        ))}
                    </div>
                    <div className="fixed bottom-0 bg-base-100 mt-4 border-t py-4">
                        <button className="btn btn-primary w-44">Back Home</button>
                    </div>
                </aside>
                <section className="p-6">
                    <Outlet />
                </section>
            </main>
        </>
    );
};

export default DashboardLayout;
