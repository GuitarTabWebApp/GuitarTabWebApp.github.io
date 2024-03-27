// import logo from "./logo.svg";
import MainBox from "./../Components/MainBox";
import "./LoginPage.css";
import MusicNote from "@material-ui/icons/MusicNote";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Input from "@material-ui/core/Input";
import { useState } from "react";
import CryptoJS from "crypto-js";

function LoginPage({ setLoggedIn }) {
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  const navigate = useNavigate();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      // Call your function here
      console.log("Enter key pressed");
      handleSubmit();
    }
  }

  function getSHA(e) {
    return CryptoJS.SHA256(password).toString();
  }

  function handleSubmit(e) {
    setPassword(getSHA());
    if (password !== null) {
      setLoggedIn(true);
      navigate("/HomePage");
    } else {
      setWrongPassword("Incorrect Password");
    }
  }

  return (
    <MainBox>
      <div
        className="LoginPage"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "50vh",
          width: "auto",
          alignItems: "center",
        }}
      >
        <h1 style={{ padding: "1rem", margin: ".75rem" }}>
          Welcome to <br /> GuitarTabStorageApp
        </h1>
        <MusicNote
          className="MusicNote"
          style={{ height: "3rem", width: "auto", marginBottom: "1.25rem" }}
        />
        <h3>Username</h3>
        <Input />

        <h3>Password</h3>
        <Input
          onInput={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <p style={{ color: "red" }}>{wrongPassword}</p>
        <div>
          <Button color="primary" onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </div>
      </div>
    </MainBox>
  );
}

export default LoginPage;
