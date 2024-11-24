import About from "../Components/About";
import ContentGrid from "../Components/ContentGrid.js";
import Tabs from "../Components/Tabs.js";
import Header from "../Components/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "../footer.css";
import Error from "../Components/Error";
import { useEffect } from "react";
import { Gradient } from "../Components/Gradient.js";
import "../gradient.css";
import { ScrollingFooter } from "../Components/ScrollingFooter.js";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/", // Root path for Header
        element: <Tabs />,
      },
      {
        path: "/projects/",
        element: <Tabs />,
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

      <footer className="footer">
        <ScrollingFooter />
      </footer>
    </>
  );
};

export default HomePage;
