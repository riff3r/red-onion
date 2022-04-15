import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const { id, image, title, description, price } = meal;

  const handleMealDetails = (event) => {
    navigate(`/meal/${id}`);
  };

  const addToCart = (event) => {
    event.stopPropagation();
  };
  return (
    <Col sm={12} md={6} lg={4} xl={4} className="text-center">
      <div
        onClick={handleMealDetails}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`p-5 mb-4 ${hover ? "shadow" : ""}`}
      >
        <img className="img-fluid mb-4 w-75" src={image} alt="" />
        <h6>{title}</h6>
        <p className="text-gray">{description}</p>
        <h3 className="mb-3">$ {price}</h3>
        <Button onClick={addToCart} className="btn btn-danger">
          Add To Cart
        </Button>
      </div>
    </Col>
  );
};

export default Meal;
