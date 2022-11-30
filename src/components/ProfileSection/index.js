import React from "react";

import {
  ProfileContainer,
  ContentWrapper,
  PageTitle,
  TextContainer,
  TitleText,
  ProfileContent,
} from "./ProfileElements";

const ProfileSection = ({ titleText, lightBg }) => {
  return (
    <ProfileContainer lightBg={lightBg}>
      <ContentWrapper>
        <PageTitle>
          <TextContainer>
            <TitleText>{titleText}</TitleText>
          </TextContainer>
        </PageTitle>
        <ProfileContent>ini content sejarah</ProfileContent>
      </ContentWrapper>
    </ProfileContainer>
  );
};

export default ProfileSection;
