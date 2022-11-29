import React from "react";
import ServiceCard from "../Components/ServiceCard";
import WebDeb from "../Assets/Services/coding.png";
import WebDis from "../Assets/Services/web-design.png";
import AppDeb from "../Assets/Services/app-development.png";
import GrapDis from "../Assets/Services/graphic-design.png";
import LogoDis from "../Assets/Services/logo-design.png";
import ThreeDDis from "../Assets/Services/3d-modeling.png";

const Services = () => {
    return (
        <section className="my-container section-gap flex flex-col gap-4 lg:gap-5 2xl:gap-6 text-center">
            <div>
                <div className="line-x max-w-md mx-auto mb-2">
                    <h5 className="text-base-content/50 mx-2">What you get from me ?</h5>
                </div>
                <h1 className="title">
                    My Offered <span className="text-accent">Services</span>
                </h1>
            </div>
            <p className="max-w-md mx-auto">
                At about this time of year, some months after New Year’s resolutions have been made and kept, or made and neglected.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard img={WebDeb} title={"Web Development"}>
                    <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                </ServiceCard>
                <ServiceCard img={WebDis} title={"Web Design"}>
                    <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                </ServiceCard>
                <ServiceCard img={AppDeb} title={"Software Development"}>
                    <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
                </ServiceCard>
                <ServiceCard img={GrapDis} title={"Graphic Design"}>
                    <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
                </ServiceCard>
                <ServiceCard img={LogoDis} title={"Logo Design"}>
                    <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
                </ServiceCard>
                <ServiceCard img={ThreeDDis} title={"3D Design"}>
                    <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
                </ServiceCard>
            </div>
        </section>
    );
};

export default Services;
