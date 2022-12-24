import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import Tilt from "react-parallax-tilt";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { api_url } from "../Apis/api";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`${api_url}/project/${id}`)
            .then((res) => {
                setLoading(false);
                setProject(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, [id]);

    if (loading) {
        return (
            <div className="my-container section-gap grid grid-cols-1 gap-y-6 lg:gap-x-20 lg:grid-cols-2 animate-pulse">
                <div className="lg:col-start-2 lg:row-[3/-3] grid grid-cols-4 gap-4">
                    <div className="col-span-full sm:col-span-2 lg:col-span-full h-60 sm:h-52 lg:h-60 xl:h-52 bg-base-content/10 rounded-lg"></div>
                    <div className="hidden sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 h-60 sm:h-52 lg:h-60 xl:h-52 bg-base-content/10 rounded-lg"></div>
                    <div className="hidden md:block lg:row-start-2 lg:col-span-2 h-60 sm:h-52 lg:h-60 xl:h-52 bg-base-content/10 rounded-lg"></div>
                </div>
                <div className="space-y-4">
                    <div className="w-32 h-6 bg-base-content/10 rounded-lg"></div>
                    <div className="w-40 h-8 bg-base-content/10 rounded-lg"></div>
                </div>
                <dl className="flex flex-wrap gap-4">
                    {[...Array(10)].map((name, index) => (
                        <div className="w-[88px] sm:w-24 h-6 bg-base-content/10 rounded-lg"></div>
                    ))}
                </dl>
                <div className="flex flex-wrap gap-4">
                    <div className="w-28 h-11 bg-base-content/10 rounded-lg"></div>
                    <div className="w-48 h-11 bg-base-content/10 rounded-lg"></div>
                    <div className="w-48 h-11 bg-base-content/10 rounded-lg"></div>
                </div>
                <div className="space-y-4">
                    {[...Array(3)].map((overview, index) => (
                        <div className="h-10 bg-base-content/10 rounded-lg"></div>
                    ))}
                </div>
            </div>
        );
    } else {
        const { name, category, images, live_site, client_site, server_site, overview, technology } = project;
        const overviews = overview.split(" | ");

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
    }
};

export default ProjectDetails;
