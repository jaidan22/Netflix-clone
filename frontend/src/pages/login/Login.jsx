import "./login.scss";
import logo from "../../images/icon.png";
import { useRef, useState } from "react";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { error, isFetching, dispatch } = useContext(AuthContext);

  const handlePass = (e) => {
    setpassword(e.target.value);
  };
  const handlEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

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
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => handlEmail(e)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => handlePass(e)}
          />
          <button
            className="loginBtn"
            type="submit"
            onClick={(e) => handleClick(e)}
            disabled={isFetching}
          >
            Sign in
            <span>{error}</span>
          </button>
          {/* {console.log(error)} */}
          {/* {error && (
            <span className="error" style={{ color: "red", fontSize: "16px" }}>
              {error}
            </span>
          )} */}
          <span>
            New to Netflix? <Link to="/register">Sign up now.</Link>
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
