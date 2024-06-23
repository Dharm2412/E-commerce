import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful Google sign-in
        console.log("Google sign-in successful:", result.user.email);
        alert("Google sign-in successful");
        // Optionally, redirect the user
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.code, error.message);
        alert(`Google sign-in failed: ${error.message}`);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("User signed in:", userCredential.user.email);
        alert("Login successful");
        // Optionally, redirect the user
      })
      .catch((error) => {
        console.error("Login error:", error.code, error.message);
        alert(`Login failed: ${error.message}`);
      });
  };

  return (
    <div className="text-center">
      <form onSubmit={handleLogin}>
        <div className="form-group my-5">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required // Ensures the field is required
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required // Ensures the field is required
          />
        </div>

        <button type="submit" className="btn btn-primary my-5">
          Submit
        </button>
        <button
          type="button"
          onClick={googleSignIn}
          className="btn btn-primary my-5"
        >
          Google Sign-in
        </button>
      </form>
    </div>
  );
}
