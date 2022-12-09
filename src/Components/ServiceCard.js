import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
    return (
        <div className="group relative bg-base-content/5 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
                <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" className="w-12" width="512" height="512" alt="burger illustration" />
                <div className="space-y-2">
                    <h5 className="text-2xl font-bold transition group-hover:text-primary">First feature</h5>
                    <p className="opacity-70">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
                </div>
                <Link className="flex items-center justify-between group-hover:text-primary">
                    <span className="text-sm">Read more</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
