import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TiHomeOutline, TiPhoneOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import Input from "../../Components/Input";
import { toast } from "react-toastify";
import { useState } from "react";

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm("service_mcrcidj", "template_alwk0ge", form.current, "KpBLWelYY6loC3DE2").then(
            (result) => {
                setLoading(false);
                toast.success("Successfully Sent Message");
            },
            (error) => {
                toast.error(error.text);
            }
        );
    };

    return (
        <section className="my-container section-gap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-5">
                    <h2 className="title">Feel free to contact me.</h2>
                    <p className="max-w-2xl">
                        Feel up the form. I can ensure that I will get back to you within 2 hours. You can also call me or mail me in any emergency.
                    </p>
                    <div className="flex items-center">
                        <div className="icon-bg">
                            <TiHomeOutline />
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-xl mb-1">My Address</h4>
                            <p className="opacity-70">C&B Road, Barisal Sadar. Barisal</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="icon-bg">
                            <TiPhoneOutline />
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                            <p className="opacity-70">+880-1736817612 (WhatsApp)</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="icon-bg">
                            <MdAlternateEmail />
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-xl mb-1">Email Address</h4>
                            <p className="opacity-70">mdpahlovi07@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg">
                    <form ref={form} className="space-y-5" onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <Input type={"text"} name={"name"} text={"Name"} />
                            <Input type={"text"} name={"phone"} text={"Phone"} />
                        </div>
                        <Input type={"email"} name={"email"} text={"Email"} />
                        <Input type={"text"} name={"subject"} text={"Subject"} />
                        <Input type={"text"} name={"message"} text={"Message"} textField />
                        <input type="submit" value={loading ? "Sending..." : "Sent Message"} className="btn btn-primary w-full" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
