import React from "react";

const HORECA: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      <div className="w-full mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-sans text-[#0f145b] mb-4 text-center">
          HORECA
        </h1>
        <p className="text-lg text-[#0f145b] mb-12 text-center">
          World Renowned brands that cater to the Professional sector needs.
        </p>
        <div className="grid grid-cols-1 gap-10 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <div className="rounded-lg overflow-hidden">
            <a
              href="https://inimexshop.com/en/collections/kleenex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/kimberly.svg`}
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

export default HORECA;
