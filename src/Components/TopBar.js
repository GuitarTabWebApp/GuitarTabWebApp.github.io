import React from "react";
import "./TopBar.css";
import { Button } from "@material-ui/core";

const TopBar = ({ LoggedIn }) => {
  if (!LoggedIn) {
    return (
      <div className="topBar">
        <div className="logo">GTSA</div>
      </div>
    );
  }

  return (
    <div className="topBar">
      <div className="logo">GTSA</div>
      <div className="navLinksContainer">
        <Button className="navLinks">Home Page</Button>
        <Button className="navLinks">Tabs</Button>
      </div>
    </div>
  );
};

export default TopBar;
