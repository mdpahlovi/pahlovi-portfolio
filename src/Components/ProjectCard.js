import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProjectCard = ({ project }) => {
    const { name, category, thumbnail, live_site } = project;
    const route = name.toLowerCase();

    return (
        <div className="group relative block bg-black">
            <img src={thumbnail} className="absolute inset-0 h-full w-full object-cover transition-opacity opacity-90 group-hover:opacity-75" alt="" />
            <div className="relative p-8">
                <div className="p-6 bg-base-100/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-center text-white border border-gray-100">
                    <p className="text-2xl font-bold">{name}</p>
                    <p>{category}</p>
                </div>
                <div className="mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 flex flex-wrap justify-between gap-4">
                        <a href={live_site} target="_blank" rel="noreferrer">
                            <Button>Live Site</Button>
                        </a>
                        <Link to={`/projects/${route}`}>
                            <Button>See Details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
