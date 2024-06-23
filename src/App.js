import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
