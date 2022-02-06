import "./login.scss";
import logo from "../../images/icon.png";
import { useRef, useState } from "react";
import { ArrowForwardIosOutlined } from "@material-ui/icons";

function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginBtn">Sign in</button>
          <span>
            New to Netflix? <a href="">Sign up now.</a>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="">Learn more.</a>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
