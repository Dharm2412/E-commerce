import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader2 from "./Loader2";

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
      <div className="text-center products-heading">
        <h2>
          <mark>PRODUCTS</mark>
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4" style={containerStyle}>
        {loading && (
          <div className="col-12">
            <div className="d-flex justify-content-center my-2">
              <Loader2 />
            </div>
          </div>
        )}
        {!loading && !error && (
          <>
            {products.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 50)}...
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="card-price">${product.price}</span>
                      <Link to={`/product/${product.id}`}>
                        <button className="btn btn-primary btn-sm">
                          Details
                        </button>
                      </Link>
                    </div>
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
