import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Subtitle,
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
  darkText,
  description,
  img,
  alt,
  ada,
  description2,
  description3,
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
                <Subtitle darkText={darkText}>{description3}</Subtitle>
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
