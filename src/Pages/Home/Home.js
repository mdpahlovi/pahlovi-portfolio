import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import ContactForm from "./ContactForm";
import { Tab } from "@headlessui/react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import MyProject from "../Components/MyProject";
import MyService from "../Components/MyService";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Home = () => {
    const titles = ["Skills", "Experience", "Education"];

    return (
        <>
            <Hero />
            <AboutMe />
            <div data-aos="zoom-out" className="my-container section-gap">
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
                    <Tab.Panels className="mt-8">
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
                <MyService />
            </section>
            <section className="my-container space-y-8">
                <h1 className="title text-center pb-2">My Projects</h1>
                <MyProject res={true} />
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
