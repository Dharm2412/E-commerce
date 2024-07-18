import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "star filled" : "star"}>
        &#9733;
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Error fetching product details. Please try again later.");
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      alert("Product added to cart!");
    } else {
      alert("Product details not available. Cannot add to cart.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <div className="card">
        <div className="container-fluid">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <h4 className="price">
                Current price: <span>${product.price}</span>
              </h4>
              <StarRating rating={Math.round(product.rating?.rate || 0)} />
              <button
                className="add-to-cart btn btn-default"
                type="button"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
