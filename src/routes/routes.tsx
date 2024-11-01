import { paths } from "./path";
import Home from "@/views/home";
import Product from "@/views/product";
import Order from "@/views/order";
import Checkout from "@/views/checkout";
import EventDetail from "@/views/event-detail";
import DefaultLayout from "@/layouts/defaultLayout";
import { createBrowserRouter } from "react-router-dom";
import Setting from "@/views/setting";

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
