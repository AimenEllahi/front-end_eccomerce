import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./viewed.css";
import AOS from "aos";
import "aos/dist/aos.css";
import winter from "../../images/image8.webp";
import { useSelector } from "react-redux";
import Product from "../Product/product";

const Viewed = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const products = useSelector((state) => state.Products);
  console.log(products);

  return (
    <Container fluid className='m-0 p-5 '>
      <div>
        <h1 className='section-title'>Most Viewed</h1>
      </div>
      <Row
        data-aos='fade-right'
        className='d-flex justify-content-around viewed-container-1'
      >
        {products.slice(0, 3).map((product, index) => (
          <Product key={index} product={product} />
        ))}

        {/* <Col lg={3} md={5} xs={12} className='mt-4 product-card'>
          <img src={winter} alt='' className='card-img' />
          <div className='product-details'>
            <h3 className='product-title'>Title</h3>
            <span className='product-desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              recusandae pariatur eligendi necessitatibus illo atque tempore...
            </span>
            <span className='price'>$18</span>
            <button className='order-btn'>Order Now</button>
          </div>
        </Col>

        <Col lg={3} md={5} xs={12} className=' mt-4 product-card'>
          <img src={winter} alt='' className='card-img' />
          <div className='product-details'>
            <h3 className='product-title'>Title</h3>
            <span className='product-desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              recusandae pariatur eligendi necessitatibus illo atque tempore...
            </span>
            <span className='price'>$18</span>
            <button className='order-btn'>Order Now</button>
          </div>
        </Col>

        <Col lg={3} md={5} xs={12} className=' mt-4 product-card'>
          <img src={winter} alt='' className='card-img' />
          <div className='product-details'>
            <h3 className='product-title'>Title</h3>
            <span className='product-desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              recusandae pariatur eligendi necessitatibus illo atque tempore...
            </span>
            <span className='price'>$18</span>
            <button className='order-btn'>Order Now</button>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Viewed;
