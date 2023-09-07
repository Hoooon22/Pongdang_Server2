import React, { useState } from 'react';
import "./Slider.css";
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
    const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

        const handleSliderMouseLeave = () => {
          // 마우스 범위를 벗어날 때 자동으로 다시 투명해지게 합니다.
          const controlNext = document.querySelector(".carousel-control-next");
          controlNext && controlNext.classList.add("transparent");

          const controlPrev = document.querySelector(".carousel-control-prev");
          controlPrev && controlPrev.classList.add("transparent");
        };

      return (
        <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              onMouseLeave={handleSliderMouseLeave} // mouseleave를 핸들하는 함수를 추가합니다.
            >
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