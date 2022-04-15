import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";

const SignUp = () => {
  return (
    <div className="auth">
      <div className="container">
        <Form className="w-50 mx-auto">
          <div className="text-center">
            <img className="mt-5 mb-4" width={150} src={logo} alt="" />
          </div>

          <h3 className="text-center mb-3">Sign Up</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="username"
              className="border-0"
              type="text"
              placeholder="Type Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              name="email"
              className="border-0"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="password"
              className="border-0"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              name="confirmPassword"
              className="border-0"
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <Button className="w-100" variant="danger" type="submit">
            Submit
          </Button>

          <div className="text-center  mt-3">
            <Link
              to="/login"
              className="text-danger d-inline-block text-decoration-none"
            >
              Already Have an Account?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
