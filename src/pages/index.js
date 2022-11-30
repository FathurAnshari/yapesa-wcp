import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import { homeObjYT } from "../components/InfoEmbed/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import YoutubeEmbedSection from "../components/InfoEmbed";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <YoutubeEmbedSection {...homeObjYT} />
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
};

export default Home;
