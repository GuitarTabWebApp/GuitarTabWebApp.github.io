import React from "react";
import "./MainBox.css";

const MainBox = ({ children, allowScroll }) => {
  return (
    <div
      className="MainBox"
      style={{ flexDirection: "column", padding: "2rem", borderRadius: "15px" }}
    >
      {children}
    </div>
  );
};

export default MainBox;
