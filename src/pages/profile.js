import React, { useState } from "react";
import { sejarahObj, visiMisiObj } from "../components/ProfileSection/Data";
import SejarahYapesa from "../components/ProfileSection/SejarahYapesa";
import VisiMisi from "../components/ProfileSection/VisiMisi";

import ScrollToTop from "../components/ScrollToTop";

const Profile = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <SejarahYapesa {...sejarahObj} />
      <VisiMisi {...visiMisiObj} />
    </>
  );
};

export default Profile;
