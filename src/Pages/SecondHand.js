import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import SellProduct from "./SellProduct";
import BuyProduct from "./BuyProduct";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SecondHand() {
     const [view, setView] = useState("buy");
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <b>Second Hand Marketplace</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => setView("buy")}
                className="nav-link-custom"
              >
                Buy Products
              </Nav.Link>
              <Nav.Link
                onClick={() => setView("sell")}
                className="nav-link-custom"
              >
                Sell Products
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>{view === "buy" ? <BuyProduct /> : <SellProduct />}</Container>
    </div>
  );
}
