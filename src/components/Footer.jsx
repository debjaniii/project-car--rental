// components/Footer.js
import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Link from "next/link"; // Change here
import "../styles/Footer.css"; // Adjust path as necessary

const quickLinks = [
  { path: "/about", display: "About" },
  { path: "#", display: "Privacy Policy" },
  { path: "/cars", display: "Car Listing" },
  { path: "/blogs", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link href="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                  WheelQuest

                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            At WheelQuest, we’re dedicated to providing exceptional car rental services to enhance your travel experience. Our extensive fleet offers a variety of vehicles to suit every need, whether for a business trip or a weekend getaway. Enjoy flexible booking options, competitive pricing, and unparalleled customer support. With WheelQuest, you can hit the road with confidence and style!
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link href={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Saltlake, Kolkata, India</p>
              <p className="office__info">Phone: +0995345875365</p>
              <p className="office__info">Email: eg@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__desc">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
