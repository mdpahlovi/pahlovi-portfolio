import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import { LoadData } from "../Contexts/DataContext";
import Tilt from "react-parallax-tilt";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProjectDetails = () => {
    const params = useParams();
    const { projects } = useContext(LoadData);
    const project = projects.find((project) => project.name.toLowerCase() === params.name);
    const { name, category, images, live_site, client_site, server_site, overview, technology } = project;
    const overviews = overview.split("  ");

    return (
        <div className="my-container section-gap grid grid-cols-1 gap-y-6 lg:gap-x-20 lg:grid-cols-2">
            <div className="lg:col-start-2 lg:row-[3/-3] grid grid-cols-4 gap-4">
                <Tilt className="col-span-full sm:col-span-2 lg:col-span-full w-full h-60 sm:h-52 lg:h-full">
                    <PhotoProvider>
                        <PhotoView src={images[0]}>
                            <img src={images[0]} className="img-cover" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </Tilt>
                <Tilt className="hidden sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 w-full h-52 lg:h-full">
                    <PhotoProvider>
                        <PhotoView src={images[1]}>
                            <img src={images[1]} className="img-cover" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </Tilt>
                <Tilt className="hidden md:block lg:row-start-2 lg:col-span-2 w-full h-52 lg:h-full">
                    <PhotoProvider>
                        <PhotoView src={images[2]}>
                            <img src={images[2]} className="img-cover" alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </Tilt>
            </div>
            <div>
                <p className="opacity-70">{category}</p>
                <h1 className="-mb-2 text-2xl font-semibold">{name}</h1>
            </div>
            <dl className="flex flex-wrap gap-4">
                {technology.map((name, index) => (
                    <button className="btn btn-xs btn-primary" key={index}>
                        {name}
                    </button>
                ))}
            </dl>
            <div className="flex flex-wrap gap-4">
                <a href={live_site} target="_blank" rel="noreferrer">
                    <Button>Live Site</Button>
                </a>
                <a href={client_site} target="_blank" rel="noreferrer">
                    <Button>Client Side Codes</Button>
                </a>
                <a href={server_site} target="_blank" rel="noreferrer">
                    <Button>Server Side Codes</Button>
                </a>
            </div>
            <p className="text-sm">
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
