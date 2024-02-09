import About from "../Components/About";
import ContentGrid from "../Components/ContentGrid";
import FlickityCarousel from "../Components/FlickityCarousel";
import Header from "../Components/Header";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pageRoutes = createBrowserRouter([
  {
    path: "/home",
    element: <Header />, // <Outlet /> on this component allows access to children.
    children: [
      {
        path: "/home/", // Root path for Header
        element: <ContentGrid />,
      },
      {
        path: "/home/projects/",
        element: (
          <ContentGrid />
        ),
      },
      {
        path: "/home/about/",
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
