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
        <div className="grid grid-cols-3 gap-6 mb-16">
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
                src={`${process.env.PUBLIC_URL}/images/horeca.svg`}
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

        {/* FMCG Section */}
        <div id="fmcg-section" className="text-center mb-4">
          <h2 className="text-3xl font-sans text-[#0f145b]">FMCG</h2>
        </div>

        {/* Description on left */}
        <p className="text-lg text-[#0f145b] mb-12 pl-4">
          A diverse portfolio of trusted international brands.
        </p>

        {/* 4 Column Grid for Images */}
        <div className="grid grid-cols-4 gap-10 mb-6">
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/varta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/varta.svg`}
                alt="Varta Logo"
                className="w-full h-40 object-contain hover:opacity-80 transition"
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
                className="w-full h-40 object-contain hover:opacity-80 transition"
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
                className="w-full h-40 object-contain hover:opacity-80 transition"
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
                className="w-full h-40 object-contain hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

        {/* 4 Column Grid for Images */}
        <div className="grid grid-cols-4 gap-10 mb-6">
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/lion.svg`}
              alt="Brand 5"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/agnesi.svg`}
              alt="Brand 6"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/kimberly.svg`}
              alt="Brand 7"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/bambo.svg`}
              alt="Brand 8"
              className="w-full h-40 object-contain"
            />
          </div>
        </div>

        {/* 3 Column Grid for Images */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/ciptadent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/ciptadent.svg`}
                alt="Ciptadent logo"
                className="w-full h-64 object-contain hover:opacity-80 transition"
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
                className="w-full h-64 object-contain hover:opacity-80 transition"
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
        <div className="grid grid-cols-3 gap-10">
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/beauty1.svg`}
              alt="Beauty Brand 1"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/beauty2.svg`}
              alt="Beauty Brand 2"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/beauty3.svg`}
              alt="Beauty Brand 3"
              className="w-full h-40 object-contain"
            />
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
        <div className="grid grid-cols-1 gap-10 w-1/3">
          <div className="rounded-lg overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/horeca1.svg`}
              alt="HORECA Brand"
              className="w-full h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurBrand;
