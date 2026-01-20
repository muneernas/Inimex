import React from "react";
const Header: React.FC = () => {
  const navLinks = [
   
    { label: "About Us", path: "/aboutus" },
    { label: "Our Brand Categories", path: "/ourbrand" },
    { label: "Contact Us", path: "/Inimex/contact-us" },
  ];

  return (
    <header className="bg-gray-100 shadow sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex w-full px-8 py-4 items-center">
        {/* Logo */}
        <a href="/dd" className="flex-shrink-0">
          <img
            src={`${process.env.PUBLIC_URL}/images/InimexLogo.svg`}
            alt="Inimex Logo"
            className="w-32 h-auto object-contain"
          />
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-1 justify-center gap-12 text-[#0f145b] text-lg font-bold">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="hover:text-[#0a0d3f] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Shop Online Button */}
        <a
          href="https://inimexshop.com/en/"
          className=" w-1/6 bg-[#0f145b] text-white px-6 py-2 rounded-full hover:bg-[#0a0d3f] transition-colors duration-200 flex-shrink-0 flex justify-center items-center"
        >
          Shop Online
        </a>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <a href="https://inimexshop.com/en/">
          <img
            src="/images/InimexLogo.svg"
            alt="Inimex Logo"
            className="w-24 h-auto object-contain"
          />
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2">
          <a
            href="/ss"
            className="bg-[#0f145b] text-white px-4 py-2 rounded-full hover:bg-[#0f145b] transition-colors duration-200"
          >
            Shop
          </a>
          {/* Hamburger icon */}
          <button className="p-2 rounded-md border border-gray-300">
            <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-5 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
