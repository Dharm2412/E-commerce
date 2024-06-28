import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TruckLoader from "./DotLoader";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
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
    <div className="container px-5 py-4 mx-auto">
      <div className="row" style={containerStyle}>
        {loading && <TruckLoader />}
        {!loading
          ? products.map((product) => (
              <div className="card">
                <div className="card__wrapper"></div>
                <div className="card__img">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt="Product"
                  />
                </div>
                <div className="card__title">{product.title}</div>
                <div className="card__subtitle">
                  {product.description.slice(0, 50)}...
                </div>
                <div className="card__wrapper">
                  <div className="card__price">${product.price}</div>
                  <div className="card__counter">
                    <button type="button" class="btn btn-primary btn-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          : !loading && <p>No articles found</p>}
      </div>
    </div>
  );
}
