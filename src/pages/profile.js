import React, { useState } from "react";
import MapEmbeded from "../components/MapEmbeded";
import {
  pimpinanObj,
  sejarahObj,
  visiMisiObj,
} from "../components/ProfileSection/Data";
import Pimpinan from "../components/ProfileSection/Pimpinan";
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
      <Pimpinan {...pimpinanObj} />
      <MapEmbeded />
    </>
  );
};

export default Profile;
