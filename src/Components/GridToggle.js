import { CButton } from "@coreui/react";
import { TiMinus, TiPlus } from "react-icons/ti";
import {
  motion,
  useViewportScroll,
  useTransform,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import "../gridtoggle.css";

export const GridToggle = ({ increase, decrease }) => {
  const { scrollY } = useViewportScroll(); // Get scroll position
  const scrollVelocity = useVelocity(scrollY); // Get scroll velocity (speed)
  const [scrolling, setScrolling] = useState(false);

  // Track the velocity and transform it to a Y movement
  const y = useTransform(scrollVelocity, [-1, 0, 1], [-6, 0, 6]); // Movement based on velocity

  // Spring animation for smoother motion
  const springY = useSpring(y, { stiffness: 700, damping: 16 });

  // Effect to handle when scrolling has stopped
  useEffect(() => {
    if (scrolling) {
      // Set a timeout to detect when the scroll event has stopped
      const timeout = setTimeout(() => {
        setScrolling(false); // Set scrolling to false once timeout triggers
      }, 150); // 150ms delay after scrolling stops

      return () => clearTimeout(timeout); // Clear the timeout on cleanup
    }
  }, [scrolling, scrollY]);

  // UseEffect to set scrolling to true when the scroll velocity changes
  useEffect(() => {
    if (scrollVelocity.get() !== 0) {
      setScrolling(true);
    }
  }, [scrollVelocity]);

  return (
    <motion.div
      className="gridToggleContainer"
      style={{ y: springY }} // Apply the spring motion for smooth bounce
    >
      <CButton onClick={increase}>
        <TiPlus />
      </CButton>
      <CButton onClick={decrease}>
        <TiMinus />
      </CButton>
    </motion.div>
  );
};
