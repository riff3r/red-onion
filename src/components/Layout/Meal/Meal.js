import React, { useState } from "react";
import { Col } from "react-bootstrap";

const Meal = ({ meal }) => {
  const [hover, setHover] = useState(false);
  const { image, title, description, price } = meal;
  return (
    <Col sm={12} md={6} lg={4} xl={4} className="text-center">
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`p-5 mb-4 ${hover ? "shadow" : ""}`}
      >
        <img className="img-fluid mb-4 w-75" src={image} alt="" />
        <h6>{title}</h6>
        <p className="text-gray">{description}</p>
        <h3>$ {price}</h3>
      </div>
    </Col>
  );
};

export default Meal;
