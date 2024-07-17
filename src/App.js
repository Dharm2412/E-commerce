import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Cart from "./Pages/Cart";
import Contectme from "./Pages/Contectme";
import ProductDetails from "./Pages/ProductDetails";
import { useClerk } from "@clerk/clerk-react";
import Login from "./Components/Login";

function App() {
  const { user } = useClerk();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [user]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-me" element={<Contectme />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route
            path="/cart"
            element={authenticated ? <Cart/> : <Login/>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
