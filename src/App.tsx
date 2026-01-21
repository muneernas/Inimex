import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import OurBrand from "./pages/OurBrand";
import AboutUs from "./pages/aboutUs";

const App: React.FC = () => {
    return (
        <Router basename="/Inimex">
            <Header />

            <main className="min-h-screen">
                <Routes>
                    {/* Home (empty for now) */}
                    <Route path="/" element={<></>} />

                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/our-brand" element={<OurBrand />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
