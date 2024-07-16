// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Contect from "./Components/Contect";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails"; // Import ProductDetails component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Contect" element={<Contect />} />
          <Route exact path="/Product" element={<Product />} />
          <Route
            exact
            path="/product/:id/details"
            element={<ProductDetails />}
          />
          {/* Route for ProductDetails */}
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
