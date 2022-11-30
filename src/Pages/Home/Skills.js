import React from "react";
import Step from "../../Components/Step";

const Skills = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-10 p-4 md:p-10">
            <div>
                <Step heading="Expertise : ">
                    <p>HTML5, CSS3, JavaScript, React, React Router, Bootstrap, TailwindCSS, DaisyUI.</p>
                </Step>
                <Step heading="Comfortable : ">
                    <p>Node.js, MongoDB, Firebase, Material UI, Express.js.</p>
                </Step>
                <Step heading="Tools : ">
                    <p>Github, VS Code, Chrome Dev Tools, Vercel, Illustrator, Netlify, Postman, Photoshop, Figma, Cinema 4D</p>
                </Step>
                <Step heading="Personal Skills : " end>
                    <p>Project Management, Team Work, Organizing, Negotiation</p>
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

export default Skills;
