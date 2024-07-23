import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase";
import Loader2 from "../Components/Loader2";
import { Card, Button, Container } from "react-bootstrap";

export default function SDetails() {
  const { id } = useParams(); // Ensure this ID matches the one in your database
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProduct = async () => {
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, `products/${id}`)); // Updated path
        console.log("Fetched Data:", snapshot.val()); // Log the data for debugging
        if (snapshot.exists()) {
          setProduct(snapshot.val());
        } else {
          console.log("No data available at path:", `products/${id}`);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    navigate("/checkoutForm"); // Navigate to the checkout form
  };

  return (
    <Container>
      <h2 className="my-3">Product Details</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader2 />
        </div>
      ) : product ? (
        <Card>
          {product.imageUrl && (
            <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
          )}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Product not found</p>
      )}
    </Container>
  );
}
