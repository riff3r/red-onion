import { signOut } from "firebase/auth";
import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo2.png";
import auth from "../../Firebase/Firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header>
      <Navbar bg="" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              height={100}
              width={150}
              className="img-fluid"
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Nav className="ms-auto gap-4">
            <Nav.Link as={Link} to="/">
              <i className="bi bi-cart2"></i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </Nav.Link>

            {!user ? (
              <Fragment>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  className="btn btn-danger text-white rounded-pill px-4"
                  to="signup"
                >
                  Sign Up
                </Nav.Link>
              </Fragment>
            ) : (
              <button onClick={() => signOut(auth)} className="btn">
                Logout
              </button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
