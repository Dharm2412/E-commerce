import React, { useState, useEffect } from "react";


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

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 20; // Replace with your shipping logic
  const total = subtotal + shipping;

  return (
    <>
      
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-start">
            <div className="col-lg-7">
              <h5 className="mb-3">
                <a href="#!" className="text-body">
                  <i className="fas fa-long-arrow-alt-left me-2"></i>
                  Continue shopping
                </a>
              </h5>
              <hr />

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <p className="mb-1">Shopping cart</p>
                  <p className="mb-0">
                    You have {cartItems.length} items in your cart
                  </p>
                </div>
              </div>

              {cartItems.map((item, index) => (
                <div className="card mb-3" key={index}>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src={item.image}
                          className="img-fluid rounded-3"
                          alt="Shopping item"
                          style={{ width: 65 }}
                        />
                      </div>
                      <div className="ms-3">
                        <h5>{item.title}</h5>
                        <p className="small mb-0">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <div style={{ width: 50 }}>
                        <h5 className="fw-normal mb-0">{item.quantity}</h5>
                      </div>
                      <div style={{ width: 80 }}>
                        <h5 className="mb-0">${item.price.toFixed(2)}</h5>
                      </div>
                      <button
                        onClick={() => handleDeleteItem(index)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="card bg-primary text-white rounded-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Card details</h5>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                      className="img-fluid rounded-3"
                      style={{ width: 45 }}
                      alt="Avatar"
                    />
                  </div>

                  <p className="small mb-2">Card type</p>
                  <div className="d-flex mb-4">
                    <a href="#!" className="text-white me-3">
                      <i className="fab fa-cc-mastercard fa-2x"></i>
                    </a>
                    <a href="#!" className="text-white me-3">
                      <i className="fab fa-cc-visa fa-2x"></i>
                    </a>
                    <a href="#!" className="text-white me-3">
                      <i className="fab fa-cc-amex fa-2x"></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i className="fab fa-cc-paypal fa-2x"></i>
                    </a>
                  </div>

                  <form>
                    <div className="mb-4">
                      <label htmlFor="typeName" className="form-label">
                        Cardholder's Name
                      </label>
                      <input
                        type="text"
                        id="typeName"
                        className="form-control form-control-lg"
                        placeholder="Cardholder's Name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="typeText" className="form-label">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="typeText"
                        className="form-control form-control-lg"
                        placeholder="1234 5678 9012 3457"
                        minLength="19"
                        maxLength="19"
                        required
                      />
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label htmlFor="typeExp" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          id="typeExp"
                          className="form-control form-control-lg"
                          placeholder="MM/YYYY"
                          minLength="7"
                          maxLength="7"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="typeCVV" className="form-label">
                          CVV
                        </label>
                        <input
                          type="password"
                          id="typeCVV"
                          className="form-control form-control-lg"
                          placeholder="&#9679;&#9679;&#9679;"
                          minLength="3"
                          maxLength="3"
                          required
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0">Subtotal</p>
                      <p className="mb-0">${subtotal.toFixed(2)}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">${shipping.toFixed(2)}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0">Total (Incl. taxes)</p>
                      <p className="mb-0">${total.toFixed(2)}</p>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-info btn-block btn-lg"
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span>${total.toFixed(2)}</span>
                        <span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
