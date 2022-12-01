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
  Misi,
  MisiUl,
} from "./VisiMisiElements";

const VisiMisi = ({
  lightBg,
  id,
  imgStart,
  topLine1,
  topLine2,
  topLine3,
  darkText,
  description,
  ada,
  misi1,
  misi2,
  misi3,
  misi4,
  tujuan1,
  tujuan2,
  tujuan3,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine1}</TopLine>

                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
              <TextWrapper>
                <TopLine>{topLine2}</TopLine>
                <MisiUl>
                  <Misi>{misi1}</Misi>
                  <Misi>{misi2}</Misi>
                  <Misi>{misi3}</Misi>
                  <Misi>{misi4}</Misi>
                </MisiUl>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>{topLine3}</TopLine>

                <MisiUl>
                  <Misi>{tujuan1}</Misi>
                  <Misi>{tujuan2}</Misi>
                  <Misi>{tujuan3}</Misi>
                </MisiUl>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default VisiMisi;
