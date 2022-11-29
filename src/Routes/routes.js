import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Hero from "../Components/Hero";
import AboutMe from "../Pages/AboutMe";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layouts/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Hero />
                        <AboutMe />
                        <Services />
                    </>
                ),
            },
            {
                path: "about",
                element: <AboutMe />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
            },
        ],
    },
]);
