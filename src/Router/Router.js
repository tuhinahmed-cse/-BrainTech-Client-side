import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Main from "../layouts/Main";
import Category from "../MainPages/Category/Category";
import Course from "../MainPages/Course/Course";
import CourseDetails from "../MainPages/CourseDetails/CourseDetails";
import LeftSideNav from "../MainPages/LeftSideNav/LeftSideNav";
import PurchaseCourse from "../MainPages/PurchaseCourse/PurchaseCourse";

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
                element:<Course></Course>,
                loader:() => fetch('https://b610-lerning-platform-server-side-nine.vercel.app/courses/')
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({ params }) => fetch(`https://b610-lerning-platform-server-side-nine.vercel.app/course/${params.id}`)
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({ params }) => fetch(`https://b610-lerning-platform-server-side-nine.vercel.app/category/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<LeftSideNav></LeftSideNav>,
                loader:({ params }) => fetch(`https://b610-lerning-platform-server-side-nine.vercel.app/course/${params.id}`)
            },
            {
                path:'/purchase/:id',
                element:<PurchaseCourse></PurchaseCourse>,
                loader:({ params }) => fetch(`https://b610-lerning-platform-server-side-nine.vercel.app/course/${params.id}`)
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