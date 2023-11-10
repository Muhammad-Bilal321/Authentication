import React from "react";
import { useState } from "react";

import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
    console.log(e.target.value);
  };
  const submitData = (e) => {
    e.preventDefault();

    console.log({ loginData });
    axios
      .post("http://localhost:3001/login", loginData)
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signupPage = () => {
    navigate("/signup");
  };
  return (
    <div className="container mt-5 pt-3 w-25 shadow">
      <h1 className="text-center mb-3">Login</h1>
      <form onSubmit={submitData}>
        <div className="mb-3">
          <TextField
            name="email"
            type="email"
            fullWidth
            label="Email"
            value={loginData.email}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <TextField
            name="password"
            type="password"
            fullWidth
            label="Password"
            value={loginData.password}
            onChange={handleData}
          />
        </div>
        <div className="d-grid gap-2">
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </div>
      </form>
      <div className="text-center mt-3 ">
        <Button color="primary" onClick={signupPage}>
          Create an Account? Signup
        </Button>
      </div>
    </div>
  );
}
