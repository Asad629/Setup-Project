import { createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/views/Home";
import AboutUs from "@/views/AboutUs";
import Product from "@/views/Product";
import Order from "@/views/Order";
import Checkout from "@/views/Checkout";
import Sitting from "@/views/Sitting";

const routes = createBrowserRouter([
  {
    path: paths.root,
    element: <DefaultLayout />,
    children: [
      {
        path: paths.root,
        element: <Home />,
      },
      {
        path: paths.about,
        element: <AboutUs />,
      },
      {
        path: paths.product,
        element: <Product />,
      },
      {
        path: paths.order,
        element: <Order />,
      },
      {
        path: paths.checkout,
        element: <Checkout />,
      },
      {
        path: paths.sitting,
        element: <Sitting />,
      },
    ],
  },
]);

export default routes;
