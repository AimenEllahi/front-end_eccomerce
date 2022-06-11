import React from "react";
import { Carousel } from "react-bootstrap";
import "./header.css";
import image1 from "../../images/slider1.jpg";
import image2 from "../../images/slider2.jpg";
import image3 from "../../images/slider3.jpg";

const header = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block carousel-image'
          src={image1}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>upto 60% discount </h3>
          <h1>Winter Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='shop-btn'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block carousel-image'
          src={image3}
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>60% discount </h3>
          <h1>Winter Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='shop-btn'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block carousel-image'
          src={image2}
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>60% discount </h3>
          <h1>Winter Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className='shop-btn'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default header;
