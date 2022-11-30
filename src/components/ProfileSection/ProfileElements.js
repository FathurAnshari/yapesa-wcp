import styled from "styled-components";

export const ProfileContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const PageTitle = styled.div`
  position: relative;
  padding: 80px 0 50px 0;
  background-color: #fde428;
  margin: -585px 0 65px 0;
  background-position: 50% 0;
  color: #243238;
  background-size: cover;
`;

export const TextContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1050px;
`;

export const TitleText = styled.h1`
  line-height: 38px;
  font-size: 36px;
  font-weight: 700;

  ::after {
    content: "";
    display: block;
    width: 52px;
    height: 3px;
    background: #fff;
    margin: 23px 0 0;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
`;
