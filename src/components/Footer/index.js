import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                How it works
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Testimonials
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Careers
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Investor
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Terms of Service
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                Contact
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Support
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Destinations
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Sponsorhip
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                Submit Video
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Ambassadors
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Agency
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Influencer
              </FooterLink>
              {/* <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/" onClick={toggleHome}>
                Instagram
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Facebok
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Youtube
              </FooterLink>
              <FooterLink to="/" onClick={toggleHome}>
                Twitter
              </FooterLink>
              {/* <FooterLink to="/signin">Terms of Service</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              YAPESA
            </SocialLogo>
            <WebsiteRights>
              YAPESA &copy; {new Date().getFullYear()} All rights reserved{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitterf">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
