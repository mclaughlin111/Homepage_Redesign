// Import necessary dependencies
import React, { useState } from "react";
import { motion} from "framer-motion";

// Your navigation items
const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/now",
    name: "Now",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];

// Your custom NavBar component
function MyNavBar() {
  // State to keep track of the active and hovered paths
  const [activePath, setActivePath] = useState("/");
  const [hoveredPath, setHoveredPath] = useState("/");

  // Function to handle mouse over and mouse leave events
  const handleMouseOver = (path) => {
    setHoveredPath(path);
  };

  const handleMouseLeave = () => {
    setHoveredPath(activePath);
  };

  return (
    <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
      <nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === activePath;

          return (
            <motion.div
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              onMouseOver={() => handleMouseOver(item.path)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ backgroundColor: "rgba(107, 114, 128, 0.8)" }}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
}

export default MyNavBar;
