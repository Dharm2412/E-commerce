import React from "react";

import './Login.css'

const Login = () => {
  

  const handleLogin = () => {
    window.open(
      "https://present-cowbird-30.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fcart"
    );
  };
    const handlecancle = () => {
    window.open(
      "/"
    );
  }; 
  return (
    <div className="login-modal">
      <div className="login-message">
        <h2>Please Login to Continue</h2>
      </div>
      <div className="login-buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handlecancle}>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
