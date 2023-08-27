"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const scrollToDiscover = () => {
    const discoverSection = document.getElementById("discover");
    if (discoverSection) {
      discoverSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <button
          onClick={scrollToDiscover}
          className="bg-primary-blue text-white rounded-full px-6 py-3"
        >
          Explore Cars
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
