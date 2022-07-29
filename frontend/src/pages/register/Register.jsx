import "./register.scss";
import logo from "../../images/icon.png";
import { useRef, useState } from "react";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import { Helmet } from "react-helmet";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <meta property="og:site_name" content="Register" />
        <meta property="og:title" content="Register to Netflix" />
        <meta property="og:url" content="https://netflix.com" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://media.istockphoto.com/photos/television-streaming-multimedia-wall-concept-picture-id1287677376?k=20&m=1287677376&s=612x612&w=0&h=rSDhrS39-BV1AgcDJtQ7yoqWxOkR9O4Qm2LCEgVGACI="
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Register to Netflix" />
      </Helmet>
      <div className="top">
        <div className="wrapper">
          <img src={logo} alt="logo" className="logo" />
          <button className="loginbtn">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>
          Unlimited movies, TV
          <br />
          shows and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email or restart you membership.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerbtn" onClick={handleStart}>
              Get Started <ArrowForwardIosOutlined />
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerbtn" onClick={handleFinish}>
              Start <ArrowForwardIosOutlined />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
