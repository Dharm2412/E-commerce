import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.in/api/products?page=3")
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          setProducts(res.data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    margin: "10px",
  };

  return (
    <div className="container my-3">
      <div className="row" style={containerStyle}>
        {products.map((product) => (
          <div className="col-md-3 my-3" key={product.id}>
            <div className="card" style={{ ...cardStyle, width: "18rem" }}>
              <img className="card-img-top" src={product.image} alt="Product" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  {product.brand.toUpperCase()}
                </h5>
                <p className="card-text">{product.title.slice(0, 50)}...</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ${product.price}</li>
              </ul>
              <div className="card-footer">
                Discount: <cite title="Source Title">{product.discount}%</cite>
              </div>
              <div className="card-body1 my-3 text-center">
                <Link to="/" className="btn btn-primary btn-sm">
                  Details
                </Link>
                <Link to="/cart" className="btn btn-info btn-sm">
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
