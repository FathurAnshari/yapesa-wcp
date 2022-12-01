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
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/profile" onClick={toggle}>
            Profile
          </SidebarLink>
          <SidebarLink to="/kegiatan" onClick={toggle}>
            Kegiatan
          </SidebarLink>
          <SidebarLink to="/gallery" onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
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
