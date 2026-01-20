import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
    return (
        <>
            
            <main className="min-h-screen w-full bg-gray-200">
                {/* Page Wrapper */}
                <div className="w-full mx-auto px-6 py-20">
                    {/* Page Title */}
                    <h1 className="text-4xl font-sans text-[#0f145b] mb-12">
                        Contact Us
                    </h1>

                    {/* Content Area */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Section */}
                        <div className="bg-white rounded-xl p-8 flex-col">
                            {/* Your content here */}
                        
                        <div className="bg-white rounded-xl p-8">
                            {/* Your content here */}
                        </div>
                        <div className="bg-white rounded-xl p-8">
                            {/* Your content here */}
                        </div>
                        </div>

                        {/* Right Section */}
                        <div className="bg-gray-50 rounded-lg p-8">
                            {/* Your content here */}
                        </div>
                    </div>
                </div>
            </main>

           
        </>
    );
};

export default ContactUs;
