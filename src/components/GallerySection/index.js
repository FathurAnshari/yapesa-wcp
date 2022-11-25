import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import "./gallery.css";

import Img1 from "../../images/kajian.jpeg";
import Img2 from "../../images/jumatberkah.jpeg";
import Img3 from "../../images/kajiantausiah.jpeg";
import Img4 from "../../images/tahfidz.png";
import Img5 from "../../images/tahsintahfidz.jpeg";
import Img6 from "../../images/tahsinyapesa.jpeg";

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
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <FaTimes onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GallerySection;
