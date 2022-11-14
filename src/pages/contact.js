import React, { useState } from "react";
import ContactSection from "../components/ContactSection";
import { contactObj } from "../components/ContactSection/Data";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Contact = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContactSection {...contactObj} />
      <Footer />
    </>
  );
};

export default Contact;
