"use client"
import React from "react";
const ProductHomeLoader = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-2  animate-pulse ">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="w-[170px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto bg-white border border-gray-200 rounded-xl shadow"
        >
          <div className="p-2 flex flex-col">
            {/* Image Placeholder */}
            <div className="bg-purple-100 rounded-lg h-30 w-full" />

            {/* Text Placeholder Lines */}
            <div className="bg-gray-300 rounded h-4 mt-4 w-3/4" />
            <div className="bg-gray-300 rounded h-3 mt-2 w-1/4" />
            <div className="bg-gray-300 rounded h-4 mt-2 w-1/2" />
            <div className="bg-gray-300 rounded h-4 mt-2 w-1/4" />
            <div className="bg-gray-300 rounded h-4 mt-2 w-1/2" />

            {/* Button Placeholder */}
            <div className="bg-yellow-100  h-5 rounded-[12px] mt-4 w-2/4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductHomeLoader;
