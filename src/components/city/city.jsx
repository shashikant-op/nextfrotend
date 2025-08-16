"use client";

import React from "react";
import { MdLocationOn } from "react-icons/md";

const City = () => {
  const cities = [
    "कटिहार",
    "पूर्णिया",
    "भागलपुर",
    "कुर्सेला",
    "पोठिया",
    "पटना",
  ];

  return (
    <div className="w-full overflow-hidden py-3 flex flex-col gap-4  bg-white">
        <div className="w-full overflow-hidden p-3 flex justify-center items-center ">
            <span className="text-[23px] font-bold text-gray-800 ">
                We are working in city
            </span>
        </div>
        <div>
             <div className="animate-scroll space-x-4 px-4">
        {cities.concat(cities).map((city, index) => (
          <span
            key={index}
            className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-sm border border-gray-600 flex-shrink-0 cursor-pointer hover:bg-gray-900 transition flex items-center space-x-2"
          >
            <MdLocationOn className="text-white text-lg" />
            <span>{city}</span>
          </span>
        ))}
      </div>
        </div>
     
       <div className="w-full overflow-hidden p-3 flex justify-center items-center ">
            <span className="text-[16px] font-bold text-gray-800 mb-4">
                 “हमारे यहाँ उचित मूल्य पर लकड़ी का सामान मिलता है”
            </span>
        </div>
    </div>
  );
};

export default City;
