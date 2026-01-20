import React from "react";

const ContactUs: React.FC = () => {
    return (
        <>
            <main className="min-h-screen w-full bg-gray-100">
                {/* Page Wrapper */}
                <div className="w-full mx-auto px-6 py-20">
                    {/* Page Title */}
                    <h1 className="text-4xl font-sans text-[#0f145b] mb-12">
                        Contact Us
                    </h1>

                    {/* Content Area */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Section - all 3 boxes stacked */}
                        <div className="flex flex-col space-y-6">
                            {/* Box 1 - Email */}
                            <div className="bg-white rounded-3xl p-1 flex flex-col space-y-0 h-16">
                                <h3 className="text-sm px-4">Email Address:</h3>
                                <input
                                    type="email"
                                    placeholder="Type your email address"
                                    className="w-full px-4 py-2 rounded-3xl focus:outline-none border-none h-full"
                                />
                            </div>

                            {/* Box 2 - Subject (match height of Box 1) */}
                            <div className="bg-white rounded-3xl p-1 flex flex-col space-y-0 h-16">
                                <select
                                    className="w-full px-4 py-2 rounded-3xl focus:outline-none border-none h-full"
                                    defaultValue="" // ensures the placeholder is shown initially
                                >
                                    <option value="" disabled>
                                        Subject
                                    </option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Support</option>
                                    <option value="sales">Sales</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>

                            {/* Box 3 - Message */}
                            <div className="bg-white rounded-3xl p-4 flex flex-col space-y-2">
  <textarea
      placeholder="Message"
      className="w-full h-40 px-4 py-2 rounded-3xl focus:outline-none border-none resize-none"
  />
                            </div>

                        </div>

                        {/* Right Section */}
                        <div className="bg-white rounded-xl p-8">
                            {/* Right content here */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ContactUs;
