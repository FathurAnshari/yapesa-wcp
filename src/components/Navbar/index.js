import React, { useState, useEffect } from "react";

import Yapesa from "../../images/yapesa.png";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksR,
  YapesaLogo,
  Logo,
} from "./NavbarElemets";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(!scrollNav);
    } else {
      setScrollNav(scrollNav);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Logo>
            <NavLogo to="/" onClick={toggleHome}>
              <YapesaLogo src={Yapesa} />
            </NavLogo>
            <NavLogo to="/" onClick={toggleHome}>
              YAPESA
            </NavLogo>
          </Logo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinksR
                to="/"
                end
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"

                // offset={-80}
              >
                Home
              </NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR
                to="profile"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggleHome}

                // offset={-80}
              >
                Profile
              </NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR
                to="kegiatan"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggleHome}
                // offset={-80}
              >
                Kegiatan
              </NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR
                to="gallery"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggleHome}
                // offset={-80}
              >
                Gallery
              </NavLinksR>
            </NavItem>
            <NavItem>
              <NavLinksR
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                onClick={toggleHome}
                // offset={-80}
              >
                Contact
              </NavLinksR>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink
              to="/signin"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Sign In
            </NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
