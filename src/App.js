import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Profile from "./pages/profile";
import Kegiatan from "./pages/kegiatan";
import Gallery from "./pages/galery";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/kegiatan" element={<Kegiatan />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </Router>
  );
}

export default App;
