"use client";
import React from "react";
import Link from "next/link";

const CatCard = ({product}) => {
  const imageUrl = product?.image?.url || "/placeholder.jpg"; // fallback image
  const productName = product?.title || "Unknown Product";
  const productid =  product?._id || "unknown-id";
  const productPrice = product?.price || 0;
  console.log("product", product);
  console.log("imageUrl", product.images[0].url);

  return (
    <div className="flex flex-col w-full  md:flex-row  !justify-between overflow-hidden   rounded-md mb-2 gap-2 hover:bg-gray-200 transition-all duration-200">
      <div className="flex flex-row w-full justify-around overflow-hidden  md:w-3/5  gap-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <Link href={`/product/${productid}`}>
            <img
              src={product.images[0].url}
              alt={productName}
              className="w-30 h-30 object-cover rounded-md"
            />
          </Link>
        </div>

        {/* Details */}
        <div className="!w-full  ">
            <div className="flex flex-col text-left">
                <h2 className="text-md font-medium">
                    {productName.split(" ").slice(0, 8).join(" ")}
                    {productName.split(" ").length > 8 && "..."}
                </h2>
                <p className="text-sm text-gray-600">₹{productPrice}.00</p>
                <p className="text-sm text-green-600">In stock</p>
                    <div className="flex overflow-x-auto gap-2 scrollbar-hide ">
                        {product?.tags?.map((keyword, index) => (
                            <span key={index} className="flex-shrink-0 border border-gray-300 text-[12px] p-1 rounded-full px-2 whitespace-nowrap">{keyword}</span>
                        ))}
                    </div>
            </div>
        </div> 
        
      </div>
      
    </div>
  );
};

export default CatCard;
