import React from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth">
      <div className="container">
        <Form className="w-50 mx-auto">
          <div className="text-center">
            <img className="mt-5 mb-4" width={150} src={logo} alt="" />
          </div>

          <h3 className="text-center mb-3">Login</h3>

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

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <div className="text-center  mt-3">
            <Button className="w-50 mx-auto" variant="danger" type="submit">
              Login
            </Button>
            <br />
            <br />
            <Link
              to="/signup"
              className="text-danger d-inline-block text-decoration-none"
            >
              Don't have any account?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
