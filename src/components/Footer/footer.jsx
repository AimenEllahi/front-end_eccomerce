import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./footer.css";

const footer = () => {
  return (
    <Container fluid className='m-0 p-0 footer-container'>
      <Row fluid className='footer-row p-0 m-0'>
        <Col lg={12} md={12} className='footer-details'>
          <div className='footer-col'>
            <h4>company</h4>
            <ul>
              <li>
                <a href='#'>about us</a>
              </li>
              <li>
                <a href='#'>our services</a>
              </li>
              <li>
                <a href='#'>privacy policy</a>
              </li>
              <li>
                <a href='#'>affiliate program</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>get help</h4>
            <ul>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>shipping</a>
              </li>
              <li>
                <a href='#'>returns</a>
              </li>
              <li>
                <a href='#'>order status</a>
              </li>
              <li>
                <a href='#'>payment options</a>
              </li>
            </ul>
          </div>
          <div className='footer-col'>
            <h4>online shop</h4>
            <ul>
              <li>
                <a href='#'>watch</a>
              </li>
              <li>
                <a href='#'>bag</a>
              </li>
              <li>
                <a href='#'>shoes</a>
              </li>
              <li>
                <a href='#'>dress</a>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h4 style={{ marginLeft: 0 }}>Subscribe to our Newsletter</h4>
            <form action=''>
              <input type='text' placeholder='Name' name='name' required />
              <input
                type='text'
                placeholder='Email address'
                name='mail'
                required
              />
              <input type='submit' value='Subscribe'></input>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
