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
} from "./ProfileElements";

const ProfileSection = ({ titleText, lightBg, lightText, c1text, ada }) => {
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
            <C1Text lightText={lightText}>{c1text}</C1Text>
          </Column1>
          {ada ? <Column2></Column2> : ""}
        </ProfileContent>
      </ContentWrapper>
    </ProfileContainer>
  );
};

export default ProfileSection;
