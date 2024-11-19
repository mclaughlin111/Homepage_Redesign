import React from "react";
import "../squaredivs.css";

export const SquareDivs = () => {
  return (
    <div className="squareDivsContainer">
      <div className="square lightest"></div>
      <div className="square lighter"></div>
      <div className="square medium"></div>
      <div className="square darker"></div>
      <div className="square darkest"></div>
    </div>
  );
};
