import React from "react";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
    return (
        <section className="my-container section-gap space-y-8">
            <div class="grid divide-y sm:divide-y-0 divide-base-content/50 overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
                {[...Array(4)].map((project, index) => (
                    <ServiceCard project={project} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;
