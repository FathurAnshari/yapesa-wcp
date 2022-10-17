import React from "react";

const HeroSection = () => {
  return (
    <HeroCOntainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroCOntainer>
  );
};

export default HeroSection;
