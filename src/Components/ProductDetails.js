// ProductDetails.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductDetails.css"; // Ensure correct path to CSS file

function ProductDetails({ match }) {
  const productId = match.params.id; // Extract product ID from URL params
  const [product, setProduct] = useState(null); // State to store product details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch product details on component mount
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data); // Set product data from API response
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError("Error fetching product. Please try again later.");
        setLoading(false); // Ensure loading state is updated in case of error
      });
  }, [productId]); // Depend on productId to fetch data for the correct product

  // Return loading indicator while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // If product is not found, return a message
  if (error) {
    return <p>{error}</p>;
  }

  // Render product details once loaded
  return (
    <div className="container">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt="Product" />
        </div>
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button
            className="btn btn-darken"
            onClick={() => console.log("Add to cart clicked")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
