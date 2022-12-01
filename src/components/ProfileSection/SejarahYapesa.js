import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  Column1,
  Column2,
  ImgWrap,
} from "./SejarahElements";

const SejarahYapesa = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
  ada,
  description2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                {/* <Heading lightText={lightText}>{headLine}</Heading> */}
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
              </TextWrapper>
            </Column1>
            {ada ? (
              <Column2>
                <ImgWrap>
                  <Img src={img} lat={alt} />
                </ImgWrap>
              </Column2>
            ) : (
              ""
            )}
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default SejarahYapesa;
