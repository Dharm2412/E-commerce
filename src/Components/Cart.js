import React from "react";
import TruckLoader from "./DotLoader";

export default function Cart() {
  const cartItems = []; // An empty array to represent an empty cart

  return (
    <>
      <div className="cartp">
        <TruckLoader />
      </div>
      <h1 className="text-center">Cart is Empty</h1>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {cartItems.length === 0 ? (
          <div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
          </div>
        ) : (
          <div>{/* Render cart items here */}</div>
        )}
      </div>
    </>
  );
}
