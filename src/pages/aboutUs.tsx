import React from "react";

const carouselImages = [
  `${process.env.PUBLIC_URL}/images/carousel1test.jpg`,
  `${process.env.PUBLIC_URL}/images/carousel2test.jpg`,
  `${process.env.PUBLIC_URL}/images/carousel3test.jpg`,
];

function Carousel() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-md mb-10 bg-white">
      {carouselImages.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`carousel-${idx}`}
          className={`w-full h-48 sm:h-64 md:h-80 object-cover transition-opacity duration-700 ${idx === current ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
        />
      ))}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {carouselImages.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2 h-2 sm:w-3 sm:h-3 rounded-full ${idx === current ? "bg-[#0f145b]" : "bg-gray-300"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

const AboutUs: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 py-6 sm:py-10 max-w-4xl">
        {/* Headline */}
        <div className="text-base sm:text-lg md:text-xl font-normal font-sans text-[#0f145b] mb-4 text-center leading-snug">
          We are distributors and agents to many of the world’s best known
          brands of Fast Moving Consumer Goods (FMCG) since 1972 in Jordan.
        </div>
        {/* Carousel */}
        <Carousel />

        {/* Brand Category Images (copied from OurBrand) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-8">
          {/* FMCG */}
          <a
            href="/Inimex/FMCG"
            className="rounded-lg overflow-hidden shadow-md group"
            style={{ textDecoration: "none" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/fmcg.svg`}
              alt="FMCG"
              className="w-full h-48 object-cover cursor-pointer group-hover:opacity-90"
            />
            <h3 className="text-xl font-semibold text-[#0f145b] p-4 text-center cursor-pointer group-hover:underline">
              FMCG
            </h3>
            <p className="text-gray-700 p-4 text-center">
              A diverse portfolio of trusted international brands.
            </p>
          </a>
          {/* Beauty & Cosmetics */}
          <a
            href="/Inimex/BeautyAndCosmetics"
            className="rounded-lg overflow-hidden shadow-md group"
            style={{ textDecoration: "none" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/beauty.svg`}
              alt="Beauty & Cosmetics"
              className="w-full h-48 object-cover cursor-pointer group-hover:opacity-90"
            />
            <h3 className="text-xl font-semibold text-[#0f145b] p-4 text-center cursor-pointer group-hover:underline">
              Beauty & Cosmetics
            </h3>
            <p className="text-gray-700 p-4 text-center">
              Affordable and high-end makeup and skin care brands.
            </p>
          </a>
          {/* Horeca */}
          <a
            href="/Inimex/Horeca"
            className="rounded-lg overflow-hidden shadow-md group"
            style={{ textDecoration: "none" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/horecamain.svg`}
              alt="Horeca"
              className="w-full h-48 object-cover cursor-pointer group-hover:opacity-90"
            />
            <h3 className="text-xl font-semibold text-[#0f145b] p-4 text-center cursor-pointer group-hover:underline">
              Horeca
            </h3>
            <p className="text-gray-700 p-4 text-center">
              World Renowned brands that cater to the Professional sector needs.
            </p>
          </a>
        </div>

        {/* About Us Section */}
        <section
          id="about-us-section"
          className="bg-white rounded-3xl shadow-md p-4 sm:p-6 md:p-10 mt-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-[#0f145b] mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
            Inimex International Import & Export is a family-owned business
            established by the late Anton Elouty in 1972 in Amman Jordan. The
            company started with distributing cosmetics brands such as Misslyn
            and other self-care products then diversified their portfolio to
            FMCG International brands.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Today Inimex is one of the leading distribution companies in Jordan
            with over 50 employees and a substantial market coverage.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
