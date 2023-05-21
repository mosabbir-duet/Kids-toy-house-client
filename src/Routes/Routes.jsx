import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import ToyDetails from "../Pages/AllToy/ToyDetails";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../layouts/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/addtoys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/alltoys",
        element: <AllToy></AllToy>,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
