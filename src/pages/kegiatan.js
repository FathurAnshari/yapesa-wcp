import React from "react";

import KegiatanSection from "../components/KegiatanSection";
import {
  tahfidzOnlineObj,
  kajianObj,
  tahsinObj,
  jumatBerkahObj,
  tahfidzObj,
} from "../components/KegiatanSection/Data";

import ScrollToTop from "../components/ScrollToTop";

const Kegiatan = () => {
  return (
    <>
      <ScrollToTop />
      <KegiatanSection {...kajianObj} />
      <KegiatanSection {...jumatBerkahObj} />
      <KegiatanSection {...tahsinObj} />
      <KegiatanSection {...tahfidzOnlineObj} />
      <KegiatanSection {...tahfidzObj} />
    </>
  );
};

export default Kegiatan;
