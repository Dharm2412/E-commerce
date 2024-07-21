import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase";
import { Container, Card, Button, Spinner, Alert } from "react-bootstrap";

export default function SDiscription() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, `products/${id}`));
        if (snapshot.exists()) {
          setProduct(snapshot.val());
        } else {
          setError("No data available for this product.");
        }
      } catch (error) {
        setError("Error fetching product data.");
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (product) {
      console.log("Added to cart:", product);
      // Implement your cart logic here
    } else {
      setError("Product details not available. Cannot add to cart.");
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center">
        {error}
      </Alert>
    );
  }

  return (
    <Container>
      <h2 className="my-3">{product.name}</h2>
      <Card>
        {product.imageUrl && (
          <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
        )}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary" onClick={addToCart} disabled={!product}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
