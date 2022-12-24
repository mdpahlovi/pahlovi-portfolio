import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api_url } from "../../Apis/api";
import ProjectCard from "../../Components/ProjectCard";

const MyProject = ({ res }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [size, setSize] = useState(3);

    // Set different size for Different Screen
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width <= 1024 || width >= 1600) {
            setSize(4);
        } else {
            setSize(3);
        }
        return () => {
            window.removeEventListener("resize", () => setWidth(window.innerWidth));
        };
    }, [width]);

    useEffect(() => {
        axios(`${api_url}/projects`)
            .then((res) => {
                setLoading(false);
                setProjects(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, []);

    if (loading) {
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                {[...Array(size)].map((project, index) => (
                    <div key={index} className="p-8 bg-base-content/5 h-96 rounded-xl animate-pulse">
                        <div className="bg-base-content/10 h-24 rounded-lg"></div>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                {projects.slice(0, res ? size : projects.lengths).map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        );
    }
};

export default MyProject;
