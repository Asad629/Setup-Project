import { createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/views/Home";
import AboutUs from "@/views/AboutUs";

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
    ],
  },
]);

export default routes;
