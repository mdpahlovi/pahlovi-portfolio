import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import ContactForm from "./ContactForm";
import { Tab } from "@headlessui/react";
import ProjectCard from "../../Components/ProjectCard";
import Button from "../../Components/Button";
import ServiceCard from "../../Components/ServiceCard";
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Home = () => {
    const titles = ["Skills", "Experience", "Education"];
    const [width, setWidth] = useState(window.innerWidth);
    const [size, setSize] = useState(3);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

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

    return (
        <>
            <Hero />
            <AboutMe />
            <div className="my-container section-gap">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-base-content/5 p-1">
                        {titles.map((title, index) => (
                            <Tab
                                key={index}
                                className={({ selected }) =>
                                    classNames("w-full rounded-lg py-2.5", "outline-none", selected ? "bg-base-content text-base-100 font-semibold" : "")
                                }
                            >
                                {title}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-4">
                        <Tab.Panel className={classNames("rounded-xl bg-base-content/5 p-3")}>
                            <Skills />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("rounded-xl bg-base-content/5 p-3")}>
                            <Experience />
                        </Tab.Panel>
                        <Tab.Panel className={classNames("rounded-xl bg-base-content/5 p-3")}>
                            <Education />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <section className="my-container space-y-8 pb-12 sm:pb-14 lg:pb-16">
                <h1 className="title text-center pb-2">My Services</h1>
                <div className="grid divide-y sm:divide-y-0 divide-base-content/50 overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
                    {[...Array(4)].map((project, index) => (
                        <ServiceCard project={project} key={index} />
                    ))}
                </div>
            </section>
            <section className="my-container space-y-8">
                <h1 className="title text-center pb-2">My Projects</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {projects.slice(0, size).map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Link to="/projects">
                        <Button>See All</Button>
                    </Link>
                </div>
            </section>
            <ContactForm />
        </>
    );
};

export default Home;
