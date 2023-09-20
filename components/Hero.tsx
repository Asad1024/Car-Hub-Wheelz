"use client";

import CustomButton from "./CustomButton";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setShowOverlay(window.innerWidth <= 768);
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="text-[60px] font-extrabold">
          Explore, pick, and hit the road – effortless and speedy!
        </h1>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero3.png" alt="hero" fill className="object-contain" />
          {showOverlay && <div className="hero__image-overlay" />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
