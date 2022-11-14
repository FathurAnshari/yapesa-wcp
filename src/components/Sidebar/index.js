import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Profile
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Kegiatan
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
