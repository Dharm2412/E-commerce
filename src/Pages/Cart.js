import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from localStorage on component mount
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const handleDeleteItem = (index) => {
    // Remove item from cartItems array
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    // Update localStorage with updated cartItems
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (index, event) => {
    const newQuantity = Number(event.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) {
      return; // Ignore invalid quantities
    }

    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const shipping = 20; // Replace with your shipping logic
  const total = subtotal + shipping;

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="https://e7.pngegg.com/pngimages/81/559/png-clipart-shopping-cart-software-computer-icons-shopping-cart-text-retail.png"
            alt="Shopping Cart"
            width="72"
            height="57"
          />
          <h2>Your Cart</h2>
          <p className="lead">
            Review the items in your cart and proceed to checkout when ready.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Shopping cart</h4>
            <ul className="list-group mb-3">
              {cartItems.length === 0 ? (
                <li className="list-group-item text-center">
                  Your cart is empty.
                </li>
              ) : (
                cartItems.map((item, index) => (
                  <li
                    className="list-group-item d-flex justify-content-between lh-sm"
                    key={index}
                  >
                    <div className="d-flex">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        onError={(event) => {
                          event.target.src = "https://via.placeholder.com/100"; 
                        }}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                        className="me-3"
                      />
                      <div>
                        <h6 className="my-0">{item.title}</h6>
                        <small className="text-muted">
                          Quantity:{" "}
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(event) =>
                              handleQuantityChange(index, event)
                            }
                          />
                        </small>
                      </div>
                    </div>
                    <span className="text-muted">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleDeleteItem(index)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </li>
                ))
              )}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping</span>
                <strong>${shipping.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total.toFixed(2)}</strong>
              </li>
            </ul>
          </div>

          <div className="col-md-5 col-lg-4">
            <h4 className="mb-3">Checkout</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="fullName" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full name"
                    required
                  />
                  <div className="invalid-feedback">Full name is required.</div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">Address is required.</div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="paymentMethod" className="form-label">
                    Payment Method
                  </label>
                  <select className="form-select" id="paymentMethod" required>
                    <option value="">Choose...</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a payment method.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Proceed to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
