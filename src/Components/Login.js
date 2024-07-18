import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href =
      "https://present-cowbird-30.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fcart";
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="login-modal">
      <div className="login-message">
        <h2>Please Login to Continue</h2>
      </div>
      <div className="login-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
