import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../../../assets/images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const refEmail = useRef("");
  const refPassword = useRef("");
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = refEmail.current.value;
    const password = refPassword.current.value;

    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      return navigate(from, { replace: true });
    }

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    // if (user) {
    //   return navigate("/");
    // }
  }, [user, loading, error]);

  return (
    <div className="auth">
      <div className="container">
        <Form onSubmit={handleLogin} className="w-50 mx-auto">
          <div className="text-center">
            <img className="mt-5 mb-4" width={150} src={logo} alt="" />
          </div>

          <h3 className="text-center mb-3">Login</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              ref={refEmail}
              name="email"
              className="border-0"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={refPassword}
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
