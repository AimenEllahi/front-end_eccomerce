import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./productsHeader.css";
import men from "../../images/image4.jpg";
import background from "../../images/shop5.jpg";

const productsHeader = () => {
  return (
    <Container fluid className='p-0'>
      <Row className='p-0'>
        <Col lg={12} md={12} className='header-col'>
          <img className='bg_img' src={background} alt='background image' />
          <div className='header-desc'>
            <span className='header-title'>Love is the only rational act.</span>
            <div className='searchbar-container'>
              <input
                className='search'
                type='text'
                placeholder='Search Product'
              />
              <button className='search-button'>
                <BsSearch />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default productsHeader;
