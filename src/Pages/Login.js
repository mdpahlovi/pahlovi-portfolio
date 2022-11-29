import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import { ImGoogle, ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
    const handelSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="form-container section-gap content-gap-y">
            <form onSubmit={handelSubmit} className="content-gap-y">
                <Input type={"email"} name={"email"} text={"Email"} />
                <Input type={"password"} name={"password"} text={"Password"} />
                <div className="content-gap-x flex-wrap justify-between items-center">
                    <label className="label cursor-pointer">
                        <span className="mr-2">Remember me</span>
                        <input type="checkbox" className="checkbox checkbox-primary" />
                    </label>
                    <a className="link" href="/">
                        Forgot password?
                    </a>
                </div>
                <input type={"submit"} value="Login" className="btn btn-primary" />
            </form>
            <div className="line-x">
                <p className="mx-2">Or Login with</p>
            </div>
            <div className="content-gap-y xs:flex-row justify-between">
                <button className="btn btn-outline btn-primary gap-1.5">
                    <ImGoogle />
                    Google
                </button>
                <button className="btn btn-outline btn-primary gap-1.5">
                    <BsFacebook />
                    Facebook
                </button>
                <button className="btn btn-outline btn-primary gap-1.5">
                    <ImGithub />
                    Github
                </button>
            </div>
            <p className="text-center">
                Don't have an account?
                <Link to="/register" className="ml-1.5 font-bold uppercase underline">
                    Register Now
                </Link>
            </p>
        </section>
    );
};

export default Login;
