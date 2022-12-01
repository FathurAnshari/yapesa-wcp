import React from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TextWrapper2,
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
} from "./PimpinanElements";

const Pimpinan = ({
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
                <Subtitle darkText={darkText}>
                  <strong>Pembina: </strong>DR. Hj. Nunung Ayu Sofiati (Evi),
                  S.Pd.,MM
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Pengurus Harian: </strong>H. Adi Luthfi Fuadi, SS.MBA
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Pengawas: </strong> Ir. H. Nanang Ahmad Firdaus, MM
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Sekretaris : </strong>Nining Ayu Luthfia Amd
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Bendahara: </strong>Hj. Mas Ayu Romlah Saifuddin
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Anggota/Staff Administrasi: </strong> Ade Raja Faisal,
                  S.Si
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper2>
                <TopLine>{topLine2}</TopLine>
                <Subtitle darkText={darkText}>
                  <strong>Kajian: </strong>Adi Luthfi Fuadi, SS., MBA
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Kajian: </strong>KH.Anwar Sanusi, Sag
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Kajian: </strong>H. Aji Ahmad, S.Pd., M.Pd
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Tahsin: </strong>Anggi Fahmi Ulumudin
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Tahfidz: </strong> M. Rafsanjani
                </Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Tahfidz: </strong> Galih Anugerah
                </Subtitle>
              </TextWrapper2>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Pimpinan;
