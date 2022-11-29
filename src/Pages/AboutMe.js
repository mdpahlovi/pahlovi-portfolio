import React from "react";
import Profile from "../Assets/Profile.png";
import Button from "../Components/Button";

const AboutMe = () => {
    return (
        <section className="my-container grid grid-cols-1 md:grid-cols-[4fr_8fr] lg:grid-cols-[6fr_6fr] xl:grid-cols-[4fr_8fr] lg:items-center gap-y-10">
            <div className="w-max h-max p-4 border-8 border-base-content/5 rounded-full">
                <img className="max-w-[240px] xs:max-w-xs md:w-56 lg:w-auto bg-base-content/5 rounded-full" src={Profile} alt="" />
            </div>
            <div className="space-y-4 lg:-ml-8 xl:ml-12">
                <h1 className="title w-max">
                    About My
                    <div className="line-x text-sm mt-2">
                        <h5 className="text-base-content/50 mx-2">Details</h5>
                    </div>
                </h1>
                <p>
                    Hello! I’m Pahlovi. Web Developer with over 1 years of experience. Experienced with all stages of the development cycle for dynamic web
                    projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, TailwindCSS, Wordpress. Strong background in management
                    and leadership.
                </p>
                <Button>Download CV</Button>
            </div>
        </section>
    );
};

export default AboutMe;
