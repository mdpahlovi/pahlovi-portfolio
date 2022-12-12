import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Layouts/Dashboard";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/projects/:name",
                element: <ProjectDetails />,
            },
            {
                path: "/contact",
                element: <Contact />,
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
