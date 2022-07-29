import "./login.scss";
import logo from "../../images/icon.png";
import { useRef, useState } from "react";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import { Helmet } from "react-helmet";

function Login() {
  return (
    <div className="login">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta property="og:site_name" content="Login" />
        <meta property="og:title" content="Login to Netflix" />
        <meta property="og:url" content="https://netflix.com" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://media.istockphoto.com/photos/remote-control-in-the-foreground-video-on-demand-screen-in-the-blurry-picture-id1200520920?b=1&k=20&m=1200520920&s=170667a&w=0&h=V2bxCRMbVvCXVAsYTmCEW5LgE6Doiwek_jInet-r70c="
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Login to Netflix" />
      </Helmet>

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
