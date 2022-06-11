import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login, register } from "../../actions/auth";

const user = { name: "", email: "", password: "" };

function Model({ show, setShow, isLogin }) {
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const [formData, setFormData] = useState(user);

  // e was not passed when calling this function : nice way to handle this
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData));
    } else {
      dispatch(register(formData));
    }
  };
  const isValid = () => {
    return formData.email.length > 0 && formData.password.length > 0;
  };
  return (
    <div className='container'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{isLogin ? "Login" : "Sign up"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {isLogin ? (
              ""
            ) : (
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  type='name'
                  placeholder='Enter Name'
                />
              </Form.Group>
            )}

            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                type='email'
                placeholder='Enter email'
              />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                type='password'
                placeholder='Password'
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          {isLogin ? (
            <Button
              disabled={!isValid()}
              variant='primary'
              onClick={(e) => (handleSubmit(e), handleClose())}
            >
              Login
            </Button>
          ) : (
            <Button
              disabled={!isValid()}
              variant='primary'
              onClick={(e) => (handleSubmit(e), handleClose())}
            >
              Sign up
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Model;
