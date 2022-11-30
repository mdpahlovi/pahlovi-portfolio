import React from "react";
import { HiShieldCheck } from "react-icons/hi";

const Step = ({ children, heading, end }) => {
    return (
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center p-2.5 border border-base-content rounded-full">
                    <HiShieldCheck className="text-xl" />
                </div>
                {end ? "" : <div className="w-px h-full bg-base-content" />}
            </div>
            <div className={`pt-2 ${end ? "" : "pb-6"}`}>
                <p className="mb-0.5 text-lg font-bold">{heading}</p>
                {children}
            </div>
        </div>
    );
};

export default Step;
