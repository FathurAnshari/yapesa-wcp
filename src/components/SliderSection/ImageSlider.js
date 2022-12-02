import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { Container } from "./SliderElements";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Container>
      <FaAngleLeft className="left-arrow margin-top" onClick={prevSlide} />
      <FaAngleRight className="right-arrow margin-top" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="yapesa" className="image" />
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default ImageSlider;
