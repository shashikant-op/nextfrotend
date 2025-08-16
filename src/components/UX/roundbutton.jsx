"use client";

import React from "react";

const Rbutton = ({ value, icon }) => {
  return (
    <button
      className="flex items-center gap-2 p-2 px-4 border border-gray-600 rounded-full bg-transparent text-sm font-medium hover:bg-gray-100 transition"
    >
      {icon && <span>{icon}</span>}
      {value}
    </button>
  );
};

export default Rbutton;
