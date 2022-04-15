import React from "react";
import { Col, NavItem, Row } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <Row>
          <Col>
            <img width={150} src={logo} alt="" />
          </Col>
          <Col md="auto">
            <NavItem>About Online food</NavItem>
            <NavItem> Read our blog</NavItem>
            <NavItem> Sign up to deliver</NavItem>
            <NavItem> Add your restaurant</NavItem>
          </Col>
          <Col xs lg="4">
            <NavItem> Get help </NavItem>
            <NavItem> Read FAGS </NavItem>
            <NavItem> View all cities </NavItem>
            <NavItem> Restaurants near me</NavItem>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
