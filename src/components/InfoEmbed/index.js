import React from "react";
import { Button, ButtonYT } from "../ButtonElements";
import YoutubeEmbed from "../YoutubeEmbed";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column1,
  Column2,
} from "./InfoElements";

const YoutubeEmbedSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  buttonLabel2,
  url,
  primary,
  dark,
  dark2,
  to,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                  <ButtonYT
                    to={to}
                    target="_blank"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    href={url}
                  >
                    {buttonLabel2}
                  </ButtonYT>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <YoutubeEmbed embedId="LZOUdamD5uQ" />
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default YoutubeEmbedSection;
