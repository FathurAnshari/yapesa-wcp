import React from "react";

import KegiatanSection from "../components/KegiatanSection";
import {
  kegiatanObjFour,
  kegiatanObjOne,
  kegiatanObjThree,
  kegiatanObjTwo,
  kegiatanObjFive,
} from "../components/KegiatanSection/Data";

import ScrollToTop from "../components/ScrollToTop";

const Kegiatan = () => {
  return (
    <>
      <ScrollToTop />
      <KegiatanSection {...kegiatanObjOne} />
      <KegiatanSection {...kegiatanObjTwo} />
      <KegiatanSection {...kegiatanObjThree} />
      <KegiatanSection {...kegiatanObjFour} />
      <KegiatanSection {...kegiatanObjFive} />
    </>
  );
};

export default Kegiatan;
