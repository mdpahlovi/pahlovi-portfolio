import React from "react";
import { HiShieldCheck } from "react-icons/hi";

const SkillCard = ({ children, heading, end }) => {
    return (
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
                <div className="flex items-center justify-center p-2.5 border border-base-content rounded-full">
                    <HiShieldCheck className="text-xl" />
                </div>
                {end ? "" : <div className="w-px h-full bg-base-content" />}
            </div>
            <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">{heading}</p>
                <p>{children}</p>
            </div>
        </div>
    );
};

export default SkillCard;
