// TopBar component
import React, { useState } from "react";
import "./TopBar.css";
import { Button } from "@material-ui/core";

const TopBar = ({ LoggedIn, onPageChange }) => {
  const [Page, setPage] = useState("Home");

  // Function to check if user is logged in
  const checkedLoggedIn = () => {
    if (!LoggedIn) {
      console.log(LoggedIn);
      return (
        <div className="topBar">
          <div className="logo">GTSA</div>
        </div>
      );
    } else {
      return (
        <div className="topBar">
          <div className="logo">GTSA</div>
          <div className="navLinksContainer">
            <Button onClick={() => relayPage("Home")} className="navLinks">
              Home Page
            </Button>
            <Button onClick={() => relayPage("Tabs")} className="navLinks">
              Tabs
            </Button>
          </div>
        </div>
      );
    }
  };

  // Function to handle page change
  const relayPage = (pageName) => {
    setPage(pageName);
    onPageChange(pageName); // Pass the pageName to the parent component (App)
    console.log(Page);
  };

  // Render the component conditionally based on user login status
  return <>{checkedLoggedIn()}</>;
};

export default TopBar;
