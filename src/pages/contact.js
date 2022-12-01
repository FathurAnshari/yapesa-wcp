import React from "react";
import ContactSection from "../components/ContactSection";
import { contactObj } from "../components/ContactSection/Data";

import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <ContactSection {...contactObj} />
    </>
  );
};

export default Contact;
