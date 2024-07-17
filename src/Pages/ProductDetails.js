import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css"; // Ensure the CSS file name is correct

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data.image); // Log image URL for debugging
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setError("Error fetching product details. Please try again later.");
        setLoading(false);
      });
  }, [productId]);

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
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{product.title}</h3>
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`fa fa-star ${
                        i < Math.round(product.rating.rate) ? "checked" : ""
                      }`}
                    ></span>
                  ))}
                </div>
                <span className="review-no">
                  {product.rating.count} reviews
                </span>
              </div>
              <p className="product-description">{product.description}</p>
              <h4 className="price">
                current price: <span>${product.price}</span>
              </h4>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">
                  add to cart
                </button>
                <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
