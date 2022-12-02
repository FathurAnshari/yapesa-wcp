import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import "./gallery.css";

import Img1 from "../../images/kajian.jpeg";
import Img2 from "../../images/jumatberkah.jpeg";
import Img3 from "../../images/kajiantausiah.jpeg";
import Img4 from "../../images/tahfidz.png";
import Img5 from "../../images/tahsintahfidz.jpeg";
import Img6 from "../../images/tahsinyapesa.jpeg";
import Img7 from "../../images/jumatberkah1.jpeg";
import Img8 from "../../images/jumatberkah2.jpeg";
import Img9 from "../../images/jumatberkah3.jpeg";
import Img10 from "../../images/kajian1.jpeg";
import Img11 from "../../images/kajian2.jpeg";
import Img12 from "../../images/1.png";
import Img13 from "../../images/2.png";
import Img14 from "../../images/3.png";
import Img15 from "../../images/a.png";
import Img16 from "../../images/aa.png";
import Img17 from "../../images/aaa.png";
import Img18 from "../../images/aaaa.png";
import Img19 from "../../images/aaaaa.png";
import Img20 from "../../images/jumatberkah4.jpeg";

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
      imgSrc: Img6,
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
      imgSrc: Img3,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    { id: 12, imgSrc: Img12 },
    { id: 13, imgSrc: Img13 },
    { id: 14, imgSrc: Img14 },
    { id: 15, imgSrc: Img15 },
    { id: 16, imgSrc: Img16 },
    { id: 17, imgSrc: Img17 },
    { id: 18, imgSrc: Img18 },
    { id: 19, imgSrc: Img19 },
    { id: 20, imgSrc: Img20 },
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
