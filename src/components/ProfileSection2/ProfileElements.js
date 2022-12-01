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
  /* padding-top: 50px; */
`;

export const PageTitle = styled.div`
  position: absolute;
  padding: 80px 0 50px 0;
  background-color: #fde428;
  margin: -601px auto 65px auto;
  background-position: 50% 0;
  color: #243238;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin: -803px auto 65px auto;
  }

  @media screen and (max-width: 480px) {
    margin: -803px auto 65px auto;
  }
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
  color: #101522;

  ::after {
    content: "";
    display: block;
    width: 52px;
    height: 3px;
    background: #01bf71;
    margin: 23px 0 0;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column1 = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-top: -165px;
  }

  /* height: fit-content;
  width: fit-content; */
`;
export const TextWrapper = styled.div`
  max-width: 1050px;
  width: auto;
  height: auto;
  padding-top: 0;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Subtitle = styled.p`
  max-width: 1050px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? `#010606` : "#fff")};
`;

export const Column2 = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-top: -165px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const C1Text = styled.h1`
  font-size: 24px;

  color: ${({ lightText }) => (lightText ? "#f7fbfa" : "#010606")};
`;
