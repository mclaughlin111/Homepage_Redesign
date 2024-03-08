import About from "../Components/About";
import Projects from "../Components/Projects";
import Header from "../Components/Header";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tabs from "../Components/Tabs";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />, // <Outlet /> on this component allows access to children.
    children: [
      {
        path: "/", // Root path for Header
        element: <Tabs />,
      },
      {
        path: "/projects/",
        element: (
          <Tabs />
        ),
      },
      {
        path: "/about/",
        element: (
          <About />
        ),

      }
    ]
  }
])
const HomePage = () => {
  return (
    <>
      <RouterProvider router={pageRoutes} />
    <footer className="footer">©2024</footer>
    </>
  );
};

export default HomePage;
