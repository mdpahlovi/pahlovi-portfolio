import React from "react";
import Banner from "../../Assets/Banner.svg";
import Typewriter from "typewriter-effect";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="my-container section-gap md:p-0 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl lg:text-4xl">Hey,</h3>
                <h1 className="title">I am MD Pahlovi</h1>
                <h3 className="text-2xl lg:text-3xl">
                    <Typewriter
                        options={{
                            strings: ["Junior Web Developer", "Front End Developer", "ReactJS Developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h3>
                <div className="space-x-4 pt-2">
                    <Link to="/works">
                        <Button>Portfolio</Button>
                    </Link>
                    <Link to="/contact">
                        <Button>Contact Me</Button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex justify-end">
                <img className="max-w-md" src={Banner} alt="" />
            </div>
        </section>
    );
};

export default Hero;
