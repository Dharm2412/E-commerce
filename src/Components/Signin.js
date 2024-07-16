import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
    const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google sign-in
        console.log("Google sign-in successful:", result.user.email);
        navigate("/");
        alert("Google sign-in successful: " + result.user.email);
        // Optionally, redirect the user
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.code, error.message);
        alert(`Google sign-in failed: ${error.message}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        alert("User sign-in successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  };

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
            <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
              <h3 className="m-0">Welcome!</h3>
              <img
                className="img-fluid rounded mx-auto my-4"
                loading="lazy"
                src="https://img.freepik.com/free-vector/hand-drawn-man-checking-giant-check-list-background_23-2148096097.jpg?w=740&t=st=1721053652~exp=1721054252~hmac=04a64ba22e1ba091c2e4b431596c5cfcbe5c4c303a094f95d2de91f63665a2f3"
                width="245"
                height="80"
                alt="BootstrapBrain Logo"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
            <div className="p-3 p-md-4 p-xl-5">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5">
                    <h2 className="h3">Registration</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter your details to register
                    </h3>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                {/* Input fields for email and password */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btnpx btn-primary">
                  Register
                </button>
                <p className="p">
                  Already have an account?
                  <Link to="/login">
                    <span className="span">Login</span>
                  </Link>
                </p>
                <p className="p line">Or With</p>
              </form>
              <div className="flex-row">
                <button
                  type="button"
                  className="btn google"
                  onClick={googleSignIn}
                >
                  <svg
                    xmlSpace="preserve"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    viewBox="0 0 512 512"
                    y="0px"
                    x="0px"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    width="20"
                    version="1.1"
                  >
                    <path
                      d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"
                      style={{ fill: "#FBBB00" }}
                    ></path>
                    <path
                      d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                      style={{ fill: "#518EF8" }}
                    ></path>
                    <path
                      d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                      style={{ fill: "#28B446" }}
                    ></path>
                    <path
                      d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"
                      style={{ fill: "#F14336" }}
                    ></path>
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
