import React, { useRef, useState, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
  useAnimation,
} from "framer-motion";

const MomentumScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [scrollableHeight, setScrollableHeight] = useState(0);
  const controls = useAnimation();

  const resizeScrollableHeight = useCallback((entries) => {
    for (let entry of entries) {
      setScrollableHeight(entry.contentRect.height);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizeScrollableHeight(entries)
    );
    scrollRef.current && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [resizeScrollableHeight]);

  const { scrollY } = useViewportScroll();

  const negativeScrollY = useTransform(
    scrollY,
    [0, scrollableHeight],
    [0, -scrollableHeight],
    { clamp: true }
  );

  const springPhysics = {
    damping: 10,
    mass: 0.5,
    stiffness: 50,
    bounce: 0.5,
  };

  const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);

  useEffect(() => {
    const handleScrollStop = () => {
      controls.start({
        y: 0,
        transition: { type: "spring", ...springPhysics },
      });
    };

    let timeout;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScrollStop, 1);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, [controls, springPhysics]);

  return (
    <motion.div
      ref={scrollRef}
      style={{ y: springNegativeScrollY }}
      className="scrollContainer"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default MomentumScroll;
