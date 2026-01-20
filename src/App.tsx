import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

const App: React.FC = () => {
    return (
        <Router>
            <Header />

            <main className="min-h-screen">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="p-6">
                                <h1 className="text-3xl font-bold">Welcome to Inimex</h1>
                            </div>
                        }
                    />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
};

export default App;
