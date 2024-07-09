import { Children } from "react";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Faqs from "../pages/Faqs";
import Mid from "../pages/Mid";
import Product from "../pages/Product";
import TermsAndCondition from "../pages/TermsAndCondition";

export const ROUTES = [
    {
        path:"",
        element: <Layout/>,
        children: [
            {
                path: "",
                element:  <Home/>
            },
            {
                path: "/home",
                element:  <Home/>
            },
    {
        path: "/aboutus",
        element: <AboutUs/>
    },
    {
        path: "/contact",
        element: <ContactUs/>
   },
   {
        path: "/faqs",
        element: <Faqs/>
    },
    {
        path: "/mid",
        element: <Mid/>
    },
    {
        path: "/product",
        element: <Product/>
    },
    {
        path: "/terms",
        element: <TermsAndCondition/>
    },
]
},
]