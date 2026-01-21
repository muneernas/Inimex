import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs: React.FC = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !subject || !message) {
            alert("Please fill all fields");
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_xrk5wqv",        // Your Service ID
                "template_hiy2xh2",         // Your Template ID
                {
                    user_email: email,       // maps to {{user_email}} in your template
                    user_subject: subject,   // maps to {{user_subject}}
                    user_message: message,   // maps to {{user_message}}
                },
                "4mEfSmmzbc7OVXR6U"              // Your Public Key
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                },
                (error) => {
                    console.error(error);
                    alert("Failed to send message.");
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <main className="min-h-screen w-full bg-gray-100">
            <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans text-[#0f145b] mb-6 sm:mb-8 md:mb-12 text-center md:text-left">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT */}
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 items-center md:items-stretch">
                        {/* Email */}
                        <div className="bg-white rounded-3xl p-1 flex flex-col h-16 w-full">
                            <h3 className="text-sm px-4">Email Address:</h3>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Type your email address"
                                className="w-full px-4 py-2 rounded-3xl focus:outline-none border-none h-full"
                            />
                        </div>

                        {/* Subject */}
                        <div className="bg-white rounded-3xl p-1 flex flex-col h-16 w-full">
                            <select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-2 rounded-3xl focus:outline-none border-none h-full"
                            >
                                <option value="" disabled>
                                    Subject
                                </option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Support">Support</option>
                                <option value="Sales">Sales</option>
                                <option value="Feedback">Feedback</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="bg-white rounded-3xl p-4 w-full">
              <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className="w-full h-40 px-4 py-2 rounded-3xl focus:outline-none border-none resize-none"
              />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0f145b] text-white px-8 py-3 rounded-3xl hover:opacity-90 transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                        {/* Info boxes under the button */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
                            {/* Mobile Box */}
                            <a href="tel:+962798593282" className="bg-gray-100 rounded-xl p-4 flex items-center gap-3 sm:gap-4 flex-1 hover:bg-gray-200 transition-colors cursor-pointer">
                                <div className="flex-shrink-0">
                                    <img src={`${process.env.PUBLIC_URL}/images/solar_phone-linear.svg`}
                                         alt="Mobile Icon" className="w-8 h-8" />

                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-500">Mobile Number</span>
                                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">+962 79859 3282</span>
                                </div>
                            </a>

                            {/* Email Box */}
                            <a href="mailto:info@inimex.com.jo" className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 flex-1 hover:bg-gray-200 transition-colors cursor-pointer">
                                <div className="flex-shrink-0">
                                    <img src={`${process.env.PUBLIC_URL}/images/emailLogo.svg`} alt="Email Icon" className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs sm:text-sm text-gray-500">Email Address</span>
                                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 break-all">info@inimex.com.jo</span>
                                </div>
                            </a>
                        </div>
                    </form>

                    {/* RIGHT */}
                    <div className="rounded-xl p-4 sm:p-6 md:p-8 flex flex-col">
                        <div className="rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                            {/* Title */}
                            <div className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#0f145b] uppercase">
                                Connect with us on social media
                            </div>

                            {/* Social columns */}
                            <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-8">
                                {/* Facebook */}
                                <div className="flex flex-col items-center justify-start space-y-1.5 sm:space-y-2">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/Facebook.svg`}
                                        alt="Facebook Icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                                    />
                                    <div className="text-center text-xs sm:text-sm uppercase">Varta AG (JO)</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Glysolid Jordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Bambo Nature Jordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Misslyn Jordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Agnesi Jordan</div>
                                </div>

                                {/* Instagram */}
                                <div className="flex flex-col items-center justify-start space-y-1.5 sm:space-y-2">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/insta.svg`}
                                        alt="Instagram Icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                                    />
                                    <div className="text-center text-xs sm:text-sm uppercase">Bambonaturejordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Makeupfactoryjordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Malu_wilz_jordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Agnesijordan</div>
                                    <div className="text-center text-xs sm:text-sm uppercase">Zinc_jordan</div>
                                </div>

                                {/* TikTok */}
                                <div className="flex flex-col items-center justify-start space-y-1.5 sm:space-y-2">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/Tiktok text.svg`}
                                        alt="TikTok Icon"
                                        className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2"
                                    />
                                    <div className="text-center text-xs sm:text-sm uppercase">Misslyn Jordan</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;