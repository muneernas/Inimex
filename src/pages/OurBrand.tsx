import React from "react";

const OurBrand: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      <div className="w-full mx-auto px-6 py-20">
        {/* Title */}
        <h1 className="text-4xl font-sans text-[#0f145b] mb-12 text-center">
          Our Brand Categories
        </h1>
        {/* 3 Column Grid with 1 Row Each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Column 1 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <a href="#fmcg-section">
              <img
                src={`${process.env.PUBLIC_URL}/images/fmcg.svg`}
                alt="Brand"
                className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <h3 className="text-xl font-semibold text-[#0f145b] p-4 text-center">
              FMCG
            </h3>
            <p className="text-gray-700 p-4">
              A diverse portfolio of trusted international brands.
            </p>
          </div>

          {/* Column 2 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <a href="#beauty-section">
              <img
                src={`${process.env.PUBLIC_URL}/images/beauty.svg`}
                alt="Brand"
                className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <h3 className="text-xl font-semibold text-[#0f145b] p-4 text-center">
              BEAUTY & COSMETICS
            </h3>
            <p className="text-gray-700 p-4">
              Affordable and high-end makeup and skin care brands.
            </p>
          </div>

          {/* Column 3 */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <a href="#horeca-section">
              <img
                src={`${process.env.PUBLIC_URL}/images/horecamain.svg`}
                alt="Brand"
                className="w-full h-48 object-cover cursor-pointer"
              />
            </a>
            <h3 className="text-xl font-semibold text-[#0f145b] p-4 text-center">
              HORECA
            </h3>
            <p className="text-gray-700 p-4">
              World Renowned brands that cater to the Professional sector needs.
            </p>
          </div>
        </div>

        {/* 3 Column Grid with 1 Row Each */}
        {/* Removed brand category images as requested */}

        {/* FMCG Section (from FMCG.tsx) */}
        <div id="fmcg-section" className="text-center mb-4">
          <h2 className="text-3xl font-sans text-[#0f145b]">FMCG</h2>
        </div>
        <p className="text-lg text-[#0f145b] mb-12 text-center">
          A diverse portfolio of trusted international brands.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/varta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/varta.svg`}
                alt="Varta Logo"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/glysolid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/glysolid.svg`}
                alt="Agnesi Italian pasta brand logo established in 1824"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/bambo-natur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/bambo.svg`}
                alt="Bambo copyright symbol nature logo"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/abena"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/abena.svg`}
                alt="A blue square with the text Abena inside and a copyright symbol."
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/zinc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/lion.svg`}
                alt="Lion"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/pasta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/agnesi.svg`}
                alt="Agnesi Italian pasta brand logo established in 1824"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/kleenex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/kimberly.svg`}
                alt="Kimberly-Clark Professional"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/parachute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/parachute.svg`}
                alt="Parachute"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/ciptadent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/ciptadent.svg`}
                alt="Ciptadent logo"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/kodomo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/kodomo.svg`}
                alt="KODOMO logo with animals on top"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
        </div>

        {/* BEAUTY & COSMETICS Section */}
        <div id="beauty-section" className="text-center mb-4">
          <h2 className="text-3xl font-sans text-[#0f145b]">
            BEAUTY & COSMETICS
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-[#0f145b] mb-12 text-left pl-4">
          Affordable and high-end makeup and skin care brands.
        </p>

        {/* 3 Column Grid for Beauty Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/misslyn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/misslyn.svg`}
                alt="Misslyn"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/make-up-factory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/makeup.svg`}
                alt="Make-up Factory"
                className="w-full h-40 sm:h-48 object-contain hover:opacity-80 transition p-6"
              />
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/maluwilz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/maluwilz.svg`}
                alt="Malu Wilz"
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
              />
            </a>
          </div>
        </div>

        {/* HORECA Section */}
        <div id="horeca-section" className="text-center mb-4 mt-16">
          <h2 className="text-3xl font-sans text-[#0f145b]">HORECA</h2>
        </div>

        {/* Description */}
        <p className="text-lg text-[#0f145b] mb-12 text-left pl-4">
          World Renowned brands that cater to the Professional sector needs.
        </p>

        {/* 1 Column for HORECA Image */}
        <div className="grid grid-cols-1 gap-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/kleenex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/horeca.svg`}
                alt="HORECA Brand"
                className="w-full h-40 object-contain hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurBrand;
