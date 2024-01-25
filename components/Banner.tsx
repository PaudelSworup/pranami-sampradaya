import Image from "next/image";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [index, setIndex] = useState<number>(0);

  let img_container = [
    "https://4.bp.blogspot.com/-3zv5x7Kqr1Q/VlFt6abpAUI/AAAAAAAABZI/DYZ5-xB61RU/s1600/DSC04666.JPG",
    "https://mahamati.info/resources/Raj%20Shyama%20ji%20(1).jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(() => Math.floor(Math.random() * img_container.length));
    }, 3000);
    return () => clearInterval(intervalId);
  }, [img_container.length]);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))",
        }}
      ></div>

      <Image
        src={img_container[index]}
        alt="Library"
        width={900}
        height={900}
        priority
        style={{ width: "100%", height: "800px" }}
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center tracking-wide font-bold text-white mb-6">
          श्री राजी श्यामाजी प्रणाम
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-wide ">
          <p> तारतम्येन जानति सच्चिदानन्द लक्षणम्</p>
          <br />
          <p>
            जो प्रदक्षिणा निजधामकि,सातौ स्वरुप श्रीराज । <br />
            सो सारे पन्ना मिने,सैयो के सुख काज ।।
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Banner;
