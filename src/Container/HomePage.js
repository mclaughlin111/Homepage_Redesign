import About from "../Components/About";
import Projects from "../Components/Projects";
import Header from "../Components/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tabs from "../Components/Tabs";
import "../footer.css";
import Error from "../Components/Error";

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
      <footer className="footer">©2024</footer>
    </>
  );
};

export default HomePage;
