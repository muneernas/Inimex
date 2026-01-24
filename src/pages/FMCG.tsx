import React from "react";

const FMCGImages = [
  {
    href: "https://inimexshop.com/en/collections/varta",
    src: `${process.env.PUBLIC_URL}/images/varta.svg`,
    alt: "Varta Logo",
    name: "Varta",
  },
  {
    href: "https://inimexshop.com/en/collections/glysolid",
    src: `${process.env.PUBLIC_URL}/images/glysolid.svg`,
    alt: "Glysolid Logo",
    name: "Glysolid",
  },
  {
    href: "https://inimexshop.com/en/collections/kamill",
    src: `${process.env.PUBLIC_URL}/images/kamill.svg`,
    alt: "Kamill Logo",
    name: "Kamill",
  },
  {
    href: "https://inimexshop.com/en/collections/bambo-natur",
    src: `${process.env.PUBLIC_URL}/images/bambo.svg`,
    alt: "Bambo Nature Logo",
    name: "Bambo Nature",
  },
  {
    href: "https://inimexshop.com/en/collections/abena",
    src: `${process.env.PUBLIC_URL}/images/abena.svg`,
    alt: "ABENA Logo",
    name: "ABENA",
  },
  {
    href: "https://inimexshop.com/en/collections/lion",
    src: `${process.env.PUBLIC_URL}/images/lion.svg`,
    alt: "Lion Logo",
    name: "Lion",
  },
  {
    href: "https://inimexshop.com/en/collections/zinc",
    src: `${process.env.PUBLIC_URL}/images/zinc.svg`,
    alt: "Zinc Logo",
    name: "Zinc",
  },
  {
    href: "https://inimexshop.com/en/collections/emeron",
    src: `${process.env.PUBLIC_URL}/images/emeron.svg`,
    alt: "Emeron Logo",
    name: "Emeron",
  },
  {
    href: "https://inimexshop.com/en/collections/kodomo",
    src: `${process.env.PUBLIC_URL}/images/kodomo.svg`,
    alt: "Kodomo Logo",
    name: "Kodomo",
  },
  {
    href: "https://inimexshop.com/en/collections/ciptadent",
    src: `${process.env.PUBLIC_URL}/images/ciptadent.svg`,
    alt: "Ciptadent Logo",
    name: "Ciptadent",
  },
  {
    href: "https://inimexshop.com/en/collections/pasta",
    src: `${process.env.PUBLIC_URL}/images/agnesi.svg`,
    alt: "Agnesi Logo",
    name: "Agnesi",
  },
  {
    href: "https://inimexshop.com/en/collections/parachute",
    src: `${process.env.PUBLIC_URL}/images/parachute.svg`,
    alt: "Parachute Logo",
    name: "Parachute",
  },
];

const FMCG: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100">
      <div className="w-full mx-auto px-6 py-20 max-w-5xl">
        {/* FMCG Section */}
        <h1 className="text-4xl font-sans text-[#0f145b] mb-4 text-center">
          FMCG
        </h1>
        <p className="text-lg text-[#0f145b] mb-12 text-center">
          A diverse portfolio of trusted international brands.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {FMCGImages.map((img, idx) => (
            <div className="rounded-lg overflow-hidden" key={idx}>
              <a href={img.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-28 object-contain hover:opacity-80 transition p-4 cursor-pointer"
                />
                {/* Removed brand name under image */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FMCG;
