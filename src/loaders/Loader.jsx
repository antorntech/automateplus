import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="main-wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          AUTOMATE +
        </text>
      </svg>
    </div>
  );
};

export default Loader;
