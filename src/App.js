import { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import TabPage from "./Pages/TabPage"; // Make sure to import TabPage
import TopBar from "./Components/TopBar";
import "./App.css";

const App = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Page, setPage] = useState("Login"); // State to store the current page
  // const [RoutePath, setRoutePath] = useState("/manage");

  useEffect(() => {
    console.log("Page changed to:", Page);
  }, [Page]);

  const loggedIn = () => {
    return LoggedIn; // Return the value of LoggedIn
  };

  const getPage = () => {
    switch (Page) {
      case "Tabs":
        return <TabPage />;
      default:
        return <HomePage />;
    }
  };

  // Function to handle login state changes
  const handleLoginStateChange = (loggedIn) => {
    setLoggedIn(loggedIn);
    localStorage.setItem("LoggedIn", loggedIn); // Persist the login state to local storage
  };

  return (
    <body
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
      }}
      className="App"
    >
      <div>
        <BrowserRouter>
          {/* Pass the setPage function as a prop to TopBar */}
          <TopBar LoggedIn={LoggedIn} onPageChange={setPage} sx={{}} />
          <Routes>
            {/* Conditionally render the Route for LoginPage */}
            {!loggedIn() && (
              <Route
                path="/manage"
                element={<LoginPage setLoggedIn={handleLoginStateChange} />}
              />
            )}
            {/* Render the Route for HomePage */}
            {loggedIn() ? (
              <Route path="/HomePage" element={getPage()} />
            ) : (
              <Route
                path="/manage"
                element={<LoginPage setLoggedIn={handleLoginStateChange} />}
              />
            )}
            {/* Redirect to the appropriate page based on login status */}
            <Route
              exact
              path="/"
              element={
                loggedIn() ? (
                  <Navigate to="/HomePage" />
                ) : (
                  <Navigate to="/manage" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
};

export default App;
