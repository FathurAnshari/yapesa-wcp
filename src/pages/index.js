import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import { homeObjYT } from "../components/InfoEmbed/Data";
import Services from "../components/Services";

import YoutubeEmbedSection from "../components/InfoEmbed";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <YoutubeEmbedSection {...homeObjYT} />
    </>
  );
};

export default Home;
