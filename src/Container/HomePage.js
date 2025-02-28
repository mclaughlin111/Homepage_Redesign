import About from "../Components/About";

import Tabs from "../Components/Tabs.js";
import Header from "../Components/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { motion } from "framer-motion";

import "../footer.css";
import Error from "../Components/Error";
import { Gradient } from "../Components/Gradient.js";
import "../gradient.css";
import { ScrollingFooter } from "../Components/ScrollingFooter.js";

const pageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35, // Delay between animations
        delayChildren: 0.2, // Initial delay before first child
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      style={{ flex: 1 }}
    >
      <motion.div variants={childVariants}>
        <RouterProvider router={pageRoutes} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} // Start slightly below
        animate={{ opacity: 1, y: 0 }} // Move smoothly into place
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 100, // Ensure it stays above other elements
        }}
      >
        <footer className="footer">
          <ScrollingFooter />
        </footer>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
