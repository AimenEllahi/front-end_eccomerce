import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";
import Modal from "./modal.js";
import { Link } from "react-router-dom";
const OwnNavbar = () => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("AuthToken");
  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    setLogin(false);
  };
  return (
    <>
      <Navbar bg='light' expand='lg' style={{ zIndex: "999" }}>
        <Container fluid>
          <Navbar.Brand href='/' onClick={() => console.log("detected")}>
            Sikee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='mx-auto my-2 px-5 my-lg-0 my-nav-links'
              navbarScroll
            >
              <Link to='/' className='name'>
                Home
              </Link>
              <Link to='/products' className='name'>
                Shop
              </Link>
              <Link to='/contact' className='name'>
                Contact Us
              </Link>
              <Link to='/about' className='name'>
                About Us
              </Link>
            </Nav>
            <div className='buttons'>
              {token ? (
                <Button
                  className='signup-btn button'
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    className='signup-btn button'
                    onClick={(e) => {
                      e.preventDefault();
                      setLogin(false);
                      setShow(true);
                    }}
                  >
                    SignUp
                  </Button>
                  <Button
                    className='login-btn button'
                    onClick={(e) => {
                      e.preventDefault();
                      setLogin(true);
                      setShow(true);
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal setShow={setShow} show={show} isLogin={login} />
    </>
  );
};

export default OwnNavbar;
