import React, { useState } from 'react';
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

      return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="slideImage" alt="slide_01" src="/imgs/Main/Slider/Slider1.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideImage" alt="slide_01" src="/imgs/Main/Slider/Slider1.png"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="slideImage" alt="slide_01" src="/imgs/Main/Slider/Slider1.png"/>
          </Carousel.Item>
        </Carousel>
      );
}