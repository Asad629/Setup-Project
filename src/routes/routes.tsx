import { paths } from "./path";
import Home from "@/views/Home";
import AboutUs from "@/views/AboutUs";
import Product from "@/views/Product";
import Order from "@/views/Order";
import Checkout from "@/views/Checkout";
import Sitting from "@/views/Sitting";
import EventDetail from "@/views/EventDetail";
import DefaultLayout from "@/layouts/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";

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
      {
        path: paths.event_detail,
        element: <EventDetail />,
      },
    ],
  },
]);

export default routes;
