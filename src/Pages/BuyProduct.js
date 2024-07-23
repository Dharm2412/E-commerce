import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ref, get, child } from "firebase/database";
import { database } from "../firebase";
import Loader2 from "../Components/Loader2";
import { useNavigate } from "react-router-dom";

export default function BuyProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const dbRef = ref(database);
      try {
        const snapshot = await get(child(dbRef, "products"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          const fetchedProducts = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setProducts(fetchedProducts);
          setLoading(false);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyClick = (id) => {
    navigate(`/secondhand/${id}`);
  };

  return (
    <Container>
      <h2 className="my-3">Buy Products</h2>
      {!loading ? (
        <Row className="mb-5">
          {products.map((product) => (
            <Col
              key={product.id}
              md={4}
              className="d-flex align-items-stretch mb-4"
            >
              <Card className="w-100">
                {product.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top"
                  />
                )}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description.slice(0, 80)}...</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleBuyClick(product.id)}
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="d-flex justify-content-center">
          <Loader2 />
        </div>
      )}
    </Container>
  );
}
