import React from "react";

import {
  ProfileContainer,
  ContentWrapper,
  PageTitle,
  TextContainer,
  TitleText,
  ProfileContent,
  Column1,
  Column2,
  C1Text,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
} from "./ProfileElements";

const ProfileSection2 = ({
  titleText,
  lightBg,
  lightText,
  c1text,
  ada,
  topLine,
  darkText,
  p2,
  c2text,
  gambar,
  img,
  alt,
}) => {
  return (
    <ProfileContainer lightBg={lightBg}>
      <ContentWrapper>
        <PageTitle>
          <TextContainer>
            <TitleText>{titleText}</TitleText>
          </TextContainer>
        </PageTitle>
        <ProfileContent>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Subtitle darkText={darkText}>{c1text}</Subtitle>
              {p2 ? <Subtitle darkText={darkText}>{c2text}</Subtitle> : ""}
            </TextWrapper>
          </Column1>
          {ada ? (
            <Column2>
              {gambar ? (
                <ImgWrap>
                  <Img src={img} lat={alt} />
                </ImgWrap>
              ) : (
                ""
              )}
            </Column2>
          ) : (
            ""
          )}
        </ProfileContent>
      </ContentWrapper>
    </ProfileContainer>
  );
};

export default ProfileSection2;
