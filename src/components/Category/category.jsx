import React, { useEffect } from "react";
import "./category.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import men from "../../images/image4.jpg";
import women from "../../images/image7.webp";
import winter from "../../images/image8.webp";
import summer from "../../images/image9.jpg";
import footwear from "../../images/slide3.webp";
import kids from "../../images/kids.jpg";
//import { useNavigate } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // const navigate = useNavigate();
  // const handleNavigation = (e) => {
  //   e.preventDefault();
  //   navigate("/products");
  // };

  return (
    <Container fluid className='m-0 p-5 category-container'>
      <div className='category-text'>
        <h1 className='category-title'>Categories</h1>
      </div>

      <Row className='categories-1'>
        <Col lg={4} md={12} className='category-card'>
          <div data-aos='fade-up' className='men'>
            <img height={450} alt='171x180' src={men} />
            <div className='imageText'>
              <a style={{ color: "#fff" }} href='/products'>
                Men
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} className='category-card'>
          <div data-aos='fade-up' className='kids'>
            <img height={450} alt='171x180' src={kids} />
            <div className='imageText'>
              <a style={{ color: "#fff" }} href='/products'>
                Kids
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} className='category-card'>
          <div data-aos='fade-up' className='women'>
            <img height={450} alt='171x180' src={women} />
            <div className='imageText'>
              <a style={{ color: "#fff" }} href='/products'>
                Women
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} className='category-card'>
          <div data-aos='fade-up' className='winter'>
            <img height={450} alt='171x180' src={winter} />
            <div className='imageText'>
              <a style={{ color: "#fff" }} href='/products'>
                Winter
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} className='category-card'>
          <div data-aos='fade-up' className='footwear'>
            <img height={450} alt='171x180' src={footwear} />
            <div className='imageText'>
              <a style={{ color: "#fff" }} href='/products'>
                Footwear
              </a>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} className='category-card'>
          <div data-aos='fade-up' className='summer'>
            <img height={450} alt='171x180' src={summer} />
            <div className='imageText'>
              <a style={{ color: "#fff" }} href='/products'>
                Summer
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
