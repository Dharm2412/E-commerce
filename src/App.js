import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Cart from "./Pages/Cart";
import Contectme from "./Pages/Contectme";
import ProductDetails from "./Pages/ProductDetails";
import { useClerk } from "@clerk/clerk-react";
import Login from "./Components/Login";
import SecondHand from "./Pages/SecondHand";
import SDetails from "./Pages/SDetails";



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
          <Route
            path="/contact-me"
            element={authenticated ? <Contectme /> : <Login />}
          />
          <Route
            path="/product"
            element={authenticated ? <Product /> : <Login />}
          />
          <Route
            path="/product/:productId"
            element={authenticated ? <ProductDetails /> : <Login />}
          />
          <Route path="/cart" element={authenticated ? <Cart /> : <Login />} />
          <Route
            path="/secondhand"
            element={authenticated ? <SecondHand /> : <Login />}
          />
          <Route
            path="/secondhand/:id"
            element={authenticated ? <SDetails /> : <Login />}
          />
        
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
