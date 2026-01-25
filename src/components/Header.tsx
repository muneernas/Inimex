import React, { useEffect, useState } from "react";
const Header: React.FC = () => {
  const navLinks = [
    { label: "About Us", path: "/Inimex/about-us#about-us-section" },
    { label: "FMCG", path: "/Inimex/FMCG" },
    { label: "Beauty & Cosmetics", path: "/Inimex/BeautyAndCosmetics" },
    { label: "Horeca", path: "/Inimex/Horeca" },
    { label: "Contact Us", path: "/Inimex/contact-us" },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and past threshold
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`bg-gray-100 shadow sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="hidden md:flex w-full px-8 py-4 items-center">
        {/* Logo */}
        <a href="/Inimex/" className="flex-shrink-0">
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
        <a href="/Inimex/">
          <img
            src={`${process.env.PUBLIC_URL}/images/InimexLogo.svg`}
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md border border-gray-300"
          >
            <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
            <span className="block w-5 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-200 px-6 py-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="block py-3 text-[#0f145b] font-semibold hover:text-[#0a0d3f] transition-colors duration-200 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
