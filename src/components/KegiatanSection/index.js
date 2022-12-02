import React from "react";

import { FaCalendarAlt } from "react-icons/fa";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  Column1,
  Column2,
  ImgWrap,
  Jadwal,
  JadwalWrap,
  Jam,
  Wrapper,
} from "./KegiatanElements";

const KegiatanSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  bright,
  img,
  alt,
  jadwal,
  jadwalText,
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
                <Wrapper>
                  <Jam bright={bright}>
                    <FaCalendarAlt color={jadwalText ? "010606" : "f7fbfa"} />
                  </Jam>
                  <JadwalWrap bright={bright}>
                    <Jadwal jadwalText={jadwalText}>{jadwal}</Jadwal>
                  </JadwalWrap>
                </Wrapper>

                {/* <BtnWrap>
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
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} lat={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default KegiatanSection;
