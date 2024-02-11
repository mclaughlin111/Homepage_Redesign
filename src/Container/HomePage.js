import About from "../Components/About";
import Projects from "../Components/Projects";
import Header from "../Components/Header";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />, // <Outlet /> on this component allows access to children.
    children: [
      {
        path: "/", // Root path for Header
        element: <Projects />,
      },
      {
        path: "/projects/",
        element: (
          <Projects />
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
