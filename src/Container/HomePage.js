import About from "../Components/About";
import ContentGrid from "../Components/ContentGrid.js";
import Header from "../Components/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../footer.css";
import Error from "../Components/Error";
import { useEffect } from "react";
import { Gradient } from "../Components/Gradient.js";
import "../gradient.css";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />, // <Outlet /> on this component allows access to children.
    children: [
      {
        path: "/", // Root path for Header
        element: <ContentGrid />,
      },
      {
        path: "/projects/",
        element: <ContentGrid />,
      },
      {
        path: "/about/",
        element: <About />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);

const HomePage = () => {
  return (
    <>
      <main style={{ flex: 1 }}>
        <RouterProvider router={pageRoutes} />
      </main>
      <footer className="footer">©2024</footer>
    </>
  );
};

export default HomePage;
