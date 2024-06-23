import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const auth = getAuth();
  const createuser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("user sign in sussessfull")
    );
  };

  return (
    <section>
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Discover the ultimate product
                <br />
                <span className="text-primary">
                  offerings tailored just for you!
                </span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Example2"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>

                    <button
                      type="submit"
                      onClick={createuser}
                      className="btn btn-primary btn-block mb-4 text-center"
                    >
                      Sign up
                    </button>

                    <div className="text-center">
                      <p>or with:</p>
                      <a href="/login">Login</a>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaFacebookF />
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaGoogle />
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaTwitter />
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <FaGithub />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Jumbotron */}
    </section>
  );
};

export default Signin;
