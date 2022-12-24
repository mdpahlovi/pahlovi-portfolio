import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api_url } from "../../Apis/api";
import ServiceCard from "../../Components/ServiceCard";

const MyService = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`${api_url}/services`)
            .then((res) => {
                setLoading(false);
                setServices(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, []);

    if (loading) {
        return (
            <div>
                <div className="grid divide-y sm:divide-y-0 divide-base-content/50 overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
                    {[...Array(4)].map((service, index) => (
                        <div key={index} className="bg-base-content/5 space-y-8 py-12 p-8 animate-pulse">
                            <div className="w-12 h-12 bg-base-content/10 rounded"></div>
                            <div className="space-y-4">
                                <div className="h-8 bg-base-content/10 rounded"> </div>
                                <div className="h-20 bg-base-content/10 rounded"></div>
                            </div>
                            <div className="w-20 h-5 bg-base-content/10 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="grid divide-y sm:divide-y-0 divide-base-content/50 overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
                {services.map((service) => (
                    <ServiceCard service={service} key={service._id} />
                ))}
            </div>
        );
    }
};

export default MyService;
