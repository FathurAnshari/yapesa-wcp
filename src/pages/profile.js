import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import {
  profileObjFour,
  profileObjOne,
  profileObjTwo,
  profileObjThree,
} from "../components/ProfileSection/Data";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <ProfileSection {...profileObjOne} />
      <ProfileSection {...profileObjTwo} />
      <ProfileSection {...profileObjThree} />
      <ProfileSection {...profileObjFour} />
    </>
  );
};

export default Profile;
