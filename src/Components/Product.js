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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "0",
  };

  return (
    <div>
      <div className="my-3 text-center products-heading">
        <h2>
          PRODUCTS
        </h2>
      </div>
      <div className="container mx-auto mb-5" style={containerStyle}>
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
              <div className="my-3 card h-80" key={product.id} style={cardStyle}>
                <img
                  src={product.image}
                  className="my-3 card-img-top"
                  alt="Product"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description.slice(0, 50)}...
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="card-price">${product.price}</span>
                    <Link to={`/product/${product.id}`}>
                      <button className="btn btn-primary">
                        Details
                      </button>
                    </Link>
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
