import "./App.css";
import React, { useState } from "react";
import Sidebar from "../src/components/Sidebar/index";
import Navbar from "../src/components/Navbar/index";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Profile from "./pages/profile";
import Kegiatan from "./pages/kegiatan";
import Gallery from "./pages/galery";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
