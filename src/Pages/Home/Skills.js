import React from "react";
import SkillCard from "../../Components/SkillCard";

const Skills = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-6 row-gap-10">
            <div className="lg:py-6 lg:pr-16">
                <SkillCard heading="Expertise : ">HTML5, CSS3, JavaScript, React, React Router, Bootstrap, TailwindCSS, DaisyUI.</SkillCard>
                <SkillCard heading="Comfortable : ">Node.js, MongoDB, Firebase, Material UI, Express.js.</SkillCard>
                <SkillCard heading="Tools : ">Github, VS Code, Chrome Dev Tools, Vercel, Illustrator, Netlify, Postman, Photoshop, Figma, Cinema 4D</SkillCard>
                <SkillCard heading="Personal Skills : " end>
                    Project Management, Team Work, Organizing, Negotiation
                </SkillCard>
            </div>
            <div className="relative">
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
