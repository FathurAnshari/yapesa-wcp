import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import {
  HeaderTop,
  Container,
  BCA,
  HeaderMenu,
  Text,
  HeaderItems,
} from "./HeaderElements";
import iconBCA from "../../images/BCA.png";

const Header = () => {
  return (
    <HeaderTop>
      <Container>
        <HeaderMenu>
          <HeaderItems>
            <BCA src={iconBCA} />
            <Text>7750820047 An. YAPESA</Text>
          </HeaderItems>
          <HeaderItems>
            <FaMapMarker />
            <Text>Jl. Platina NO. 15 Logam, Buahbatu Bandung</Text>
          </HeaderItems>
          <HeaderItems>
            <FaEnvelope />
            <Text>kampungquranyapesa@gmail.com</Text>
          </HeaderItems>
          <HeaderItems>
            <FaPhone />
            <Text>089519006663</Text>
          </HeaderItems>
        </HeaderMenu>
      </Container>
    </HeaderTop>
  );
};

export default Header;
