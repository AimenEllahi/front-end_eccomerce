import React, { useEffect } from "react";
import "./product.css";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = ({ product }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (e, id) => {
    e.preventDefault();
    navigate("/product/" + id);
  };

  return (
    <Col data-aos='fade-right' lg={4} md={4} xs={12} className='mt-4'>
      <div className='product-card'>
        <img
          className='card-img'
          src={
            product.productImage
              ? "https://project-api-ecommerce.herokuapp.com/uploads/" +
                product.productImage
              : null
          }
          alt=''
        />
        <div className='product-details'>
          <h3 className='product-title'>
            {product.title ? product.title : null}
          </h3>
          <span className='product-desc'>
            {product.desc ? product.desc : null}
          </span>
          <span className='price'>{product.price ? product.price : null}$</span>
          <button
            className='order-btn'
            onClick={(e) => {
              handleNavigate(e, product._id);
            }}
          >
            View
          </button>
        </div>
      </div>
    </Col>
  );
};

export default Product;
