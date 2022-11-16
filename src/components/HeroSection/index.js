import React, { useState } from "react";
import { ButtonHero } from "../ButtonHero";

import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import ImageSlider from "../SliderSection/ImageSlider";
import { SliderData } from "../SliderSection/SliderData";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg> */}
      <ImageSlider slides={SliderData} />
      <HeroContent>
        <HeroH1>
          Yayasan Pendidikan <br /> Endang Saefuddin Anshari
        </HeroH1>
        <HeroP>Lembaga sosial moderen</HeroP>
        <HeroBtnWrapper>
          <ButtonHero
            to="profile-singkat"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
