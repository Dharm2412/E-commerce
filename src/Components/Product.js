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
    <div className="container my-3">
      <div className="row" style={containerStyle}>
        {loading && <TruckLoader />}
        {!loading
          ? products.map((product) => (
              <div className="col-md-3 my-3" key={product.id}>
                <div className="card" style={{ ...cardStyle, width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt="Product"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{product.title}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 50)}...
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: ${product.price}</li>
                  </ul>
                  <div className="card-footer">
                    Rate :{" "}
                    <cite title="Source Title">{product.rating.rate}</cite>
                    <br />
                    Count :{" "}
                    <cite title="Source Title">{product.rating.count}</cite>
                  </div>
                  <div className="card-body-button my-3">
                    <Link
                      to={`https://fakestoreapi.com/products/${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Details
                    </Link>
                    <Link to="/cart" className="btn btn-info btn-sm">
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : !loading && <p>No articles found</p>}
      </div>
    </div>
  );
}
