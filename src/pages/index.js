import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { profileObj, sejarahSingkatObj } from "../components/InfoSection/Data";
import { YTEmbedObj } from "../components/InfoEmbed/Data";
import Services from "../components/Services";

import YoutubeEmbedSection from "../components/InfoEmbed";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...profileObj} />
      <InfoSection {...sejarahSingkatObj} />
      <Services />
      <YoutubeEmbedSection {...YTEmbedObj} />
    </>
  );
};

export default Home;
