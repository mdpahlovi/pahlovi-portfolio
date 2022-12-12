import React, { useContext } from "react";
import ServiceCard from "../Components/ServiceCard";
import { LoadData } from "../Contexts/DataContext";

const Services = () => {
    const { serviceLoading, services } = useContext(LoadData);

    if (serviceLoading) {
        return <div>LoadingAnimation</div>;
    } else {
        return (
            <section className="my-container section-gap space-y-8">
                <div class="grid divide-y sm:divide-y-0 divide-base-content/50 overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
                    {services.map((service, index) => (
                        <ServiceCard service={service} key={index} />
                    ))}
                </div>
            </section>
        );
    }
};

export default Services;
