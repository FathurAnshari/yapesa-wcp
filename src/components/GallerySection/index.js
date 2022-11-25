import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import "./gallery.css";

import Img1 from "../../images/kajian.jpeg";
import Img2 from "../../images/jumatberkah.jpeg";
import Img3 from "../../images/kajiantausiah.jpeg";
import Img4 from "../../images/tahfidz.png";
import Img5 from "../../images/tahsintahfidz.jpeg";
import Img6 from "../../images/tahsinyapesa.jpeg";
import Img7 from "../../images/tahsinyapesa.jpeg";
import Img8 from "../../images/tahsinyapesa.jpeg";
import Img9 from "../../images/tahsinyapesa.jpeg";
import Img10 from "../../images/tahsinyapesa.jpeg";
import Img11 from "../../images/tahsinyapesa.jpeg";

const GallerySection = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img6,
    },
    {
      id: 8,
      imgSrc: Img6,
    },
    {
      id: 9,
      imgSrc: Img6,
    },
    {
      id: 10,
      imgSrc: Img6,
    },
    {
      id: 11,
      imgSrc: Img6,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div
        className={model ? "model open" : "model"}
        onClick={() => setModel(false)}
      >
        <img src={tempImgSrc} />
        <FaTimes onClick={() => setModel(false)} />
      </div>
      <div className="text">
        <h1>Dokumentasi Kegiatan YAPESA</h1>
      </div>
      <div className="container">
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img
                  src={item.imgSrc}
                  style={{ width: "100%", borderRadius: "0.5rem" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GallerySection;
