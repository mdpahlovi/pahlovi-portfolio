import React from "react";
import Step from "../../Components/Step";

const Education = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-10 p-4 md:p-10">
            <div>
                <Step heading="2020 - Preset : ">
                    <div className="flex flex-col gap-1">
                        <span className="font-bold">B.Sc in Textile Engineering</span>
                        <span>Shahid Abdur Rab Serniabat Textile Engineering College</span>
                    </div>
                </Step>
                <Step heading="2017 - 2019 : ">
                    <div className="flex flex-col gap-1">
                        <span className="font-bold">Senior Secondary (XII), Science</span>
                        <span>Milestone College, 1230 Dhaka.</span>
                    </div>
                </Step>
                <Step heading="2022 - Preset : " end>
                    <div className="flex flex-col gap-1">
                        <span className="font-bold">Web Application Development</span>
                        <span>in Programming Hero with Jhankar Mahbub</span>
                    </div>
                </Step>
            </div>
            <div className="relative hidden lg:block">
                <img
                    className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Education;
