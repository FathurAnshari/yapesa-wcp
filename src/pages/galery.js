import React, { useState } from "react";
import GallerySection from "../components/GallerySection";
import ScrollToTop from "../components/ScrollToTop";

const Gallery = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <GallerySection />
    </>
  );
};

export default Gallery;
