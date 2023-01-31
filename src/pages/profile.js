import React from "react";
import MapEmbeded from "../components/MapEmbeded";
import {
  pimpinanObj,
  latarBelakangObj,
  visiMisiObj,
} from "../components/ProfileSection/Data";
import Pimpinan from "../components/ProfileSection/Pimpinan";
import LatarBelakang from "../components/ProfileSection/LatarBelakang";
import VisiMisi from "../components/ProfileSection/VisiMisi";

import ScrollToTop from "../components/ScrollToTop";

const Profile = () => {
  return (
    <>
      <ScrollToTop />
      <LatarBelakang {...latarBelakangObj} />
      <VisiMisi {...visiMisiObj} />
      <Pimpinan {...pimpinanObj} />
      <MapEmbeded />
    </>
  );
};

export default Profile;
