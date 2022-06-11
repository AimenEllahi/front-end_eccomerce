import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import productImage from "../../images/image4.jpg";
import "./SingleProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../api/index";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleProduct = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchProduct(params.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  console.log(params.id);
  console.log(product);
  const navigate = useNavigate();
  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/products");
  };
  return (
    <Container fluid className='product-container'>
      <Row data-aos='fade-left'>
        <Col lg={12} className='details d-flex'>
          <img
            className='single-img'
            src={
              product.productImage
                ? "https://project-api-ecommerce.herokuapp.com/uploads/" +
                  product.productImage
                : null
            }
            alt=''
          />
          <div className='single-product-details'>
            {/* <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              obcaecati dolore adipisci ea. Ut laudantium deleniti eligendi,
              illo quidem, quis quas incidunt asperiores in tempora amet esse,
              sequi aliquam voluptas?
            </p>
            <span>Price</span> */}
            <h3>{product.title ? product.title : null}</h3>
            <p>
              {product.desc ? product.desc : null} Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ea, dolore commodi? Temporibus, sed
              eum. Hic repudiandae eaque, quidem iusto perspiciatis, expedita
              magnam et ducimus illo eligendi voluptate atque ab ex.
            </p>
            <span>Price: {product.price ? product.price : null} </span>
            <Button
              onClick={(e) => {
                handleNavigation(e);
              }}
              className='back-btn'
              style={{ backgroundColor: "#495371" }}
            >
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct;
