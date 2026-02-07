"use client";
import React, { memo } from "react";
import Link from "next/link";

const CatCard = ({ product }) => {
  const imageUrl = product?.images?.[0]?.url || "/placeholder.jpg";
  const productName = product?.title || "Bespoke Piece";
  const productid = product?._id || "unknown-id";
  const productPrice = product?.price || 0;

  return (
    <Link href={`/product/${productid}`} className="">
      {/* MOBILE LAYOUT (Horizontal Row)
         Hidden on md screens and above
      */}
      <div className="flex md:hidden  flex-row items-center  p-3 gap-4 bg-[#F7F7F7] border-b border-[#ECECEC] active:bg-[#EFEFEF] transition-colors">
        <div className="relative h-30 w-30 flex-shrink-0 overflow-hidden rounded-sm bg-[#E0E0E0]">
          <img
            src={imageUrl}
            alt={productName}
            className="h-full w-full object-cover opacity-90 mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col flex-grow min-w-0">
          <h2 className="text-[13px] font-medium text-[#333] uppercase tracking-tight truncate">
            {productName}
          </h2>
          <span className="text-[14px] font-light text-[#666] mt-0.5">₹{productPrice.toLocaleString()}</span>
          <div className="flex gap-1 mt-2">
            {product?.tags?.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-[8px] border border-[#DDD] px-1.5 py-0.5 rounded-sm text-[#888] uppercase bg-white/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
      </div>

      {/* DESKTOP LAYOUT (Vertical Card)
         Hidden on small screens, shown on md+
      */}
      <div className="hidden md:flex flex-col w-[260px] bg-[#FDFDFD] transition-all duration-500 hover:shadow-sm group/card">
        <div className="relative aspect-square w-full overflow-hidden bg-[#E2E2E2]">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>

        <div className="flex flex-col p-4 space-y-1">
          <h2 className="text-[15px] font-light tracking-tight text-[#2C2C2C] leading-snug h-10 overflow-hidden">
            {productName}
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-[16px] font-medium text-[#4A4A4A]">₹{productPrice.toLocaleString()}</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-green-700/60 font-bold">In Stock</span>
          </div>
          <div className="flex gap-1.5 pt-2 overflow-hidden">
            {product?.tags?.slice(0, 3).map((tag, index) => (
              <span key={index} className="text-[9px] border border-[#D1D1D1] text-[#777] px-2 py-0.5 rounded-full bg-white/40 whitespace-nowrap">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="h-[1px] w-0 bg-[#D1D1D1] transition-all duration-700 group-hover/card:w-full" />
      </div>
    </Link>
  );
};

export default memo(CatCard);