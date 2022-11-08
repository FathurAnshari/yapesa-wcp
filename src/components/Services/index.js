import React from "react";
import Icon1 from "../../images/kajiantausiah.jpeg";
import Icon2 from "../../images/jumatberkah.jpeg";
import Icon3 from "../../images/tahsintahfidz.jpeg";
import Icon4 from "../../images/tahfidz.png";
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
          <ServicesIcon src={Icon3} />
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
          <ServicesIcon src={Icon1} />
          <ServicesH2>Tahsin & Tahfidz</ServicesH2>
          <ServicesP>Memperindah bacaan Al-Qur'an & setoran hafalan.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Tahfidz Online</ServicesH2>
          <ServicesP>Setoran hafalan Al-Qur'an via media online.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
