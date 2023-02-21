import React, { useState } from "react";
import illustration from "../assests/Banner.png";
import illustrationWithBackground from "../assests/img.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "../App.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [value, setValue] = useState("");

  return (
    <div className="Login">
      <div
        className="imgSection"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <img src={illustrationWithBackground} alt="" />
        <h1>Hi, Welcome back</h1>
      </div>

      <div className="form  flex flex-column justify-content-center px-7  gap-3  h-full  align-items-stretch">
        <h2>Sign in to Furniture King</h2>
        <p>
          New user?
          <span className="text-green-500"> Create an account</span>
        </p>
        <span className="p-float-label">
          <InputText
            id="username"
            className="p-success p-inputtext-sm w-full"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </span>
        <span className="p-float-label">
          <InputText
            id="password"
            className="p-success w-full p-inputtext-sm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </span>
        <NavLink to="/home" className="text-black-alpha-50 text-right">
          Go to Home ?
        </NavLink>
        <Button label="Login" className="bg-black-alpha-80 w-full  " />
        <div className="text-center relative my-4">
          {" "}
          <hr />
          <span className="absolute bg-green-50 px-2 orE">OR</span>
        </div>

        <div className=" flex justify-content-center gap-3 ">
          <i className="pi pi-google text-black-apha-50"></i>
          <i className="pi pi-facebook"></i>
          <i className="pi pi-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Login;
