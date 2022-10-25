import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import Course from "../MainPages/Course/Course";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Course></Course>
            },

            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },

            {
                path:'/footer',
                element:<Footer></Footer>
            },
        ]
    }
])