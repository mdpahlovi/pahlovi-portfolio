import React, { useContext } from "react";
import ProjectCard from "../Components/ProjectCard";
import { LoadData } from "../Contexts/DataContext";

const Projects = () => {
    const { projectLoading, projects } = useContext(LoadData);

    if (projectLoading) {
        return <div>LoadingAnimation</div>;
    } else {
        return (
            <section className="my-container section-gap space-y-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </section>
        );
    }
};

export default Projects;
