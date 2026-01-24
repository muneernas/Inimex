import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import OurBrand from "./pages/OurBrand";
import FMCG from "./pages/FMCG";
import BeautyAndCosmetics from "./pages/BeautyAndCosmetics";
import HORECA from "./pages/HORECA";
import AboutUs from "./pages/aboutUs";

const App: React.FC = () => {
  return (
    <Router basename="/Inimex">
      <Header />

      <main className="min-h-screen">
        <Routes>
          {/* Home now shows About Us */}
          <Route path="/" element={<AboutUs />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/fmcg" element={<FMCG />} />
          <Route path="/beauty" element={<BeautyAndCosmetics />} />
          <Route path="/BeautyAndCosmetics" element={<BeautyAndCosmetics />} />
          <Route path="/horeca" element={<HORECA />} />
          <Route path="/our-brand" element={<OurBrand />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
