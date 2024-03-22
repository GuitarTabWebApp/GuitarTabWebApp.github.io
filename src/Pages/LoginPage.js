// import logo from "./logo.svg";
import "./LoginPage.css";
import MusicNote from "@material-ui/icons/MusicNote";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import Input from "@material-ui/core/Input";
import { useState } from "react";

function LoginPage({ setLoggedIn }) {
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    console.log(password);
    if (password.length !== 0) {
      setLoggedIn(true);
      navigate("/manage/dashboard");
    } else {
      setWrongPassword("Incorrect Password");
    }
  }

  return (
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
      <Input onInput={(e) => setPassword(e.target.value)} />
      <p style={{ color: "red" }}>{wrongPassword}</p>
      <div>
        <Button
          variant="contained"
          sx={{ color: "#1d3124" }}
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
