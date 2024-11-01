import { paths } from "./path";
import Home from "@/views/Home";
import Product from "@/views/Product";
import Order from "@/views/Order";
import Checkout from "@/views/Checkout";
import EventDetail from "@/views/EventDetail";
import DefaultLayout from "@/layouts/DefaultLayout";
import { createBrowserRouter } from "react-router-dom";
import Setting from "@/views/Setting";

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
        path: paths.setting,
        element: <Setting />,
      },
      {
        path: paths.event_detail,
        element: <EventDetail />,
      },
    ],
  },
]);

export default routes;
