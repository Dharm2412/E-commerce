import React, { useState, useEffect } from "react";
import axios from "axios";
import TruckLoader from "./DotLoader";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  return (
    <div className="container px-5 py-4 mx-auto">
      <div className="row" style={containerStyle}>
        {loading && <TruckLoader />}
        {!loading && !error && (
          <>
            {products.map((product) => (
              <div className="card" key={product.id}>
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
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        (window.location.href = `/product/${product.id}/details`)
                      }
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {!loading && error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Product;
