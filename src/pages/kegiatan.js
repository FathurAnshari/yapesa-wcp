import React, { useState } from "react";
import Footer from "../components/Footer";
import KegiatanSection from "../components/KegiatanSection";
import {
  kegiatanObjFour,
  kegiatanObjOne,
  kegiatanObjThree,
  kegiatanObjTwo,
} from "../components/KegiatanSection/Data";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";

const Kegiatan = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <KegiatanSection {...kegiatanObjOne} />
      <KegiatanSection {...kegiatanObjTwo} />
      <KegiatanSection {...kegiatanObjThree} />
      <KegiatanSection {...kegiatanObjFour} />
    </>
  );
};

export default Kegiatan;
