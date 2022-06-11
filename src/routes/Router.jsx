import { lazy } from "react";
import { Navigate } from "react-router-dom";
import SingleProduct from "../components/SingleProduct/SingleProduct.jsx";
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Home = lazy(() => import("../pages/Home/home"));
const Products = lazy(() => import("../pages/Products/products"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Product = lazy(() => import("../pages/Product/Product"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Home /> },
      { path: "/products", exact: true, element: <Products /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/contact", exact: true, element: <Contact /> },
      { path: "/product/:id", exact: true, element: <Product /> },
    ],
  },
];

export default ThemeRoutes;
