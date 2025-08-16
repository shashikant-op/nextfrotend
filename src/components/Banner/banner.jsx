"use client";
import React from "react";
import Bcard from "./bannerdiscount";

function Banner() {
  return (
    <div
      className="!w-full h-[30vh] bg-cover bg-center flex justify-center relative text-white"
      style={{
        zIndex: 0,
        backgroundImage:
          "url('https://www.decoraid.com/wp-content/uploads/2021/04/modern-urban-interior-design-2500x1875.jpeg')",
      }}
    >
      {/* Optional: Overlay for darkening if needed */}
      <div className="absolute z-[-1] inset-0 bg-black/40" />

      <Bcard />

        
      </div>
    
  );
}

export default Banner;
