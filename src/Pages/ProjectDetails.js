import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import { LoadData } from "../Contexts/DataContext";

const ProjectDetails = () => {
    const params = useParams();
    const { projects } = useContext(LoadData);

    const project = projects.find((project) => project.name.toLowerCase() === params.name);
    const { name, category, images, live_site, client_site, server_site, overview, technology } = project;
    const overviews = overview.split("  ");

    return (
        <div className="my-container section-gap grid grid-cols-1 gap-y-4 lg:gap-x-20 lg:grid-cols-2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                <h1 className="text-2xl text-white sm:text-base-content font-semibold md:text-2xl">{name}</h1>
                <p className="text-gray-300 sm:text-base-content/70">{category}</p>
            </div>
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6">
                <div
                    className="w-full h-60 bg-cover bg-center rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full lg:h-full"
                    style={{ backgroundImage: `url(${images[0]})` }}
                    loading="lazy"
                ></div>
                <div
                    className="hidden w-full h-52 bg-cover bg-center rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-full"
                    style={{ backgroundImage: `url(${images[1]})` }}
                    loading="lazy"
                ></div>
                <div
                    className="hidden w-full h-52 bg-cover bg-center rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-full"
                    style={{ backgroundImage: `url(${images[2]})` }}
                    loading="lazy"
                ></div>
            </div>
            <dl className="flex flex-wrap gap-4 items-center row-start-2 sm:row-start-3 lg:row-start-2">
                {technology.map((name, index) => (
                    <button className="btn btn-xs btn-primary" key={index}>
                        {name}
                    </button>
                ))}
            </dl>
            <div className="mt-2 col-start-1 row-start-3 self-center sm:row-span-2 lg:col-start-1 lg:row-start-3 lg:row-end-4 flex flex-wrap gap-4">
                <a href={live_site} target="_blank" rel="noreferrer">
                    <Button>Live Site</Button>
                </a>
                <div className="flex flex-wrap gap-4">
                    <a href={client_site} target="_blank" rel="noreferrer">
                        <Button>Client Site</Button>
                    </a>
                    <a href={server_site} target="_blank" rel="noreferrer">
                        <Button>Server Site</Button>
                    </a>
                </div>
            </div>
            <p className="text-sm leading-6 col-start-1 sm:col-span-2 lg:row-start-4 lg:col-span-1">
                <ul className="list-disc">
                    {overviews.map((overview, index) => (
                        <li className="ml-4" key={index}>
                            {overview}
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    );
};

export default ProjectDetails;
