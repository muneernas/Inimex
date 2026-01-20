import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-[#0f145b] w-full">
      {/* Top Section */}
      <div className="w-full px-6 py-10 flex flex-col md:flex-row gap-10">
        {/* Left Half - Contact Info */}
        <div className="md:w-1/2 space-y-2 text-gray-700">
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <p>Telephone: +962 4627791/2</p>
          <p>Fax: +962 4612109</p>
          <p>Mobile: +962 7 9859 3282</p>
          <p>Email: info@inimex.com.jo</p>
          <p>Inimex online shop: www.inimexshop.com</p>
          <p>Postal Address: P.O.Box 6020 Amman 11118 Jordan</p>
          <p>
            Location: Zahran – 3rd Circle, Philadelphia Building #11, Al Malika
            Musbah Street
          </p>
        </div>

        {/* Right Half - Map */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-bold mb-4">Our Location</h3>
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4011.10284245295!2d35.90942467623556!3d31.95562007401767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0791bafc7a1%3A0x1d655e91ca962133!2sInimex%20International%20Import%20%26%20Export%20Co!5e1!3m2!1sen!2sjo!4v1768765305071!5m2!1sen!2sjo"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Inimex Location"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0f145b] w-full py-4 text-center text-white text-sm">
        © {new Date().getFullYear()} Inimex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
