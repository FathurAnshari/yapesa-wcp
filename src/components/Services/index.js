import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Kegiatan</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Kajian Tausiah</ServicesH2>
          <ServicesP>Kegiatan kajian membahas topik hangat.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Jum'at Berkah</ServicesH2>
          <ServicesP>
            Berbagi kebahagiaan kepada orang yang kurang mampu.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Tahsin & Tahfidz</ServicesH2>
          <ServicesP>Memperindah bacaan Al-Qur'an & setoran hafalan.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
