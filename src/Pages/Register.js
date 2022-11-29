import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";

const Register = () => {
    const handelSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="form-container section-gap content-gap-y">
            <form onSubmit={handelSubmit} className="content-gap-y">
                <div className="content-gap-y xs:flex-row justify-between">
                    <Input type={"text"} name={"fastName"} text={"Fast Name"} />
                    <Input type={"text"} name={"lastName"} text={"Last Name"} />
                </div>
                <Input type={"text"} name={"img"} text={"Image url"} />
                <Input type={"email"} name={"email"} text={"Email"} />
                <Input type={"password"} name={"password"} text={"Password"} />
                <Input type={"password"} name={"confirmPassword"} text={"Confirm Password"} />
                <label className="label justify-start cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-primary" />
                    <p className="ml-2">
                        I agree to the
                        <a className="ml-2 underline" href="/">
                            Terms & Conditions
                        </a>
                    </p>
                </label>
                <input type={"submit"} value="Sign Up" className="btn btn-primary" />
            </form>
            <p className="text-center">
                If you already a user?
                <Link to="/login" className="ml-1.5 font-bold uppercase underline">
                    Login Now
                </Link>
            </p>
        </section>
    );
};

export default Register;
