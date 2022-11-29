import React from "react";

const ServiceCard = ({ img, title, children }) => {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-base-content/5 p-6">
            <img className="max-w-[112px] mx-auto" src={img} alt="" />
            <h3 className="font-bold">{title}</h3>
            {children}
        </div>
    );
};

export default ServiceCard;
