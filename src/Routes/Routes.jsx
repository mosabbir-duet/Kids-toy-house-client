import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
