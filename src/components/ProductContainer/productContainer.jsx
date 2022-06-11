import React, { useEffect } from "react";
import "./productContainer.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import winter from "../../images/image8.webp";
import Product from "../Product/product";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const ProductContainer = () => {
  const products = useSelector((state) => state.Products);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Container fluid className='m-0 p-5 '>
      <div>
        <h1 className='products-title'>Products</h1>
      </div>
      <Row className='d-flex  product-card-container'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
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

export default ProductContainer;
