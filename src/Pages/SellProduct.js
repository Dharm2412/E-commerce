import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { ref as dbRef, set, push } from "firebase/database";
import { database, storage } from "../firebase";


export default function SellProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please upload an image.");
      return;
    }

    const imageRef = storageRef(
      storage,
      `products/${Date.now()}_${image.name}`
    );
    try {
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      const newProduct = { ...product, imageUrl };
      const productsRef = dbRef(database, "products");
      const newProductRef = push(productsRef);
      await set(newProductRef, newProduct);
      setSuccess("Product submitted successfully!");
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Error submitting product: " + error.message);
      setSuccess(""); // Clear any previous success messages
    }
  };

  return (
    <Container>
      <h2 className="my-3">Sell a Product</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <div className="form-container mb-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formProductDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter product description"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formProductPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formProductImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-3">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}
