import React from "react";

const BeautyAndCosmetics: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      <div className="w-full mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-sans text-[#0f145b] mb-4 text-center">
          BEAUTY & COSMETICS
        </h1>
        <p className="text-lg text-[#0f145b] mb-12 text-center">
          Affordable and high-end makeup and skin care brands.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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
                className="w-full h-28 object-contain hover:opacity-80 transition p-4"
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
      </div>
    </main>
  );
};

export default BeautyAndCosmetics;
