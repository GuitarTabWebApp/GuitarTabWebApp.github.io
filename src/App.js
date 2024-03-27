// Import Libraries
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Import Components
// import MainBox from "./Components/MainBox";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import TopBar from "./Components/TopBar";

//Import Style
import "./App.css";

const App = () => {
  //This is to check if the user is logged in
  const [LoggedIn, setLoggedIn] = useState(false);

  // Logging the value of LoggedIn outside of JSX
  console.log("LoggedIn:", LoggedIn);

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
          <TopBar LoggedIn={LoggedIn} setLoggedIn={setLoggedIn} sx={{}} />
          <Routes>
            <Route
              path="/manage"
              element={<LoginPage setLoggedIn={setLoggedIn} />}
            />
            <Route exact path="/HomePage" element={<HomePage />} />

            <Route
              exact
              path="/"
              element={
                <Navigate to={LoggedIn ? "/manage/dashboard" : "/manage"} />
              }
            />

            {/* <Route path="/" element={<LoginPage setLoggedIn={setLoggedIn} />} />
            <Route
              path="/HomePage"
              element={LoggedIn ? <HomePage /> : <Navigate to="/" />}
            /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
};

export default App;
