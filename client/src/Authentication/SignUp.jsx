import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    console.log(e.target.value);
  };
  const submitData = (e) => {
    e.preventDefault();

    console.log({ userData });
    axios
      .post("http://localhost:3001/register", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };

  return (
    <div className="container w-25 my-5 shadow">
      <h1 className="text-center">SignUp</h1>
      <form onSubmit={submitData}>
        <div className="mb-3">
          <TextField
            name="username"
            type="text"
            fullWidth
            label="Username"
            value={userData.username}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <TextField
            name="email"
            type="email"
            fullWidth
            label="Email"
            value={userData.email}
            onChange={handleData}
          />
        </div>
        <div className="mb-3">
          <TextField
            name="password"
            type="password"
            value={userData.password}
            fullWidth
            label="Password"
            onChange={handleData}
          />
        </div>
        <div className="d-grid gap-2">
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </div>
      </form>
      <div className="text-center mt-3">
        <Button color="primary">Already have an account? Login</Button>
      </div>
    </div>
  );
};

export default SignUp;
