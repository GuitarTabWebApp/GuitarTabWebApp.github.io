// Import Libraries
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Import Components
import MainBox from "./Components/MainBox";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";

//Import Style
import "./App.css";

function App() {
  //This is to check if the user is logged in
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
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
      >
        <MainBox>
          <BrowserRouter>
            <Routes>
              <Route
                path="/manage"
                element={<LoginPage setLoggedIn={setLoggedIn} />}
              />
              <Route exact path="/manage/dashboard" element={<HomePage />} />
              <Route
                exact
                path="/"
                element={
                  <Navigate to={LoggedIn ? "/manage/dashboard" : "/manage"} />
                }
              />
            </Routes>
          </BrowserRouter>
        </MainBox>
      </body>
    </div>
  );
}

export default App;
