import About from "../Components/About";

import Header from "../Components/Header";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />, // <Outlet /> on this component allows access to children.
    children: [
      {
        path: "/about",
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
      
  
    </>
  );
};

export default HomePage;
