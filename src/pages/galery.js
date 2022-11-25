import React, { useState } from "react";
import GallerySection from "../components/GallerySection";

const Gallery = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
      <h1 style={{ textAlign: "center" }}>Kegiatan YAPESA</h1>
      <GallerySection />
    </>
  );
};

export default Gallery;
