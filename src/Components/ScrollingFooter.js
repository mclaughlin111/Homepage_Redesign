import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { format } from "date-fns";

export const ScrollingFooter = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(format(now, " h:mm a dd'th' MMM"));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Marquee speed={20}>
      <span className="copyright">©2025 </span> &nbsp;|&nbsp;
      {currentDateTime}
    </Marquee>
  );
};
