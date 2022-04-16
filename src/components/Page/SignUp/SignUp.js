import React, { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";
import auth from "../../Firebase/Firebase.init";

const SignUp = () => {
  const navigation = useNavigate();
  const refUser = useRef("");
  const refEmail = useRef("");
  const refPassword = useRef("");
  const refConfirmPassword = useRef("");

  const [createUserWithEmailAndPassword, user, loading, createUserError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateUserError] = useUpdateProfile(auth);

  console.log(user);

  if (user) navigation("/");
  useEffect(() => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (createUserError) {
      return (
        <div>
          <p>Error: {createUserError?.message}</p>
        </div>
      );
    }

    if (updateUserError) {
      return (
        <div>
          <p>Error: {updateUserError?.message}</p>
        </div>
      );
    }
  }, []);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const displayName = refUser.current.value;
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    const confirmPassword = refConfirmPassword.current.value;

    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName });
  };

  return (
    <div className="auth">
      <div className="container">
        <h1>{user?.displayName}</h1>
        <Form onSubmit={handleSignUp} className="w-50 mx-auto">
          <div className="text-center">
            <img className="mt-5 mb-4" width={150} src={logo} alt="" />
          </div>

          <h3 className="text-center mb-3">Sign Up</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Control
              ref={refUser}
              name="username"
              className="border-0"
              type="text"
              placeholder="Type Your Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail2">
            <Form.Control
              ref={refEmail}
              name="email"
              className="border-0"
              type="text"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Control
              ref={refPassword}
              name="password"
              className="border-0"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Control
              ref={refConfirmPassword}
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
