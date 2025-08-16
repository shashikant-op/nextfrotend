"use client";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Link from "next/link";
import "@/styles/card.css";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCartAsync } from "../../redux/cart/cartslice";
import { toast } from "react-toastify";
import { BsFillCartCheckFill } from "react-icons/bs";

function Card({ product }) {
  const dispatch = useDispatch();
  const quantity = 1;
  const [added, setadded] = useState(false);

  const options = {
    rating: product.ratings,
    starRatedColor: "tomato",
    numberOfStars: 5,
    name: "rating",
    starDimension: "16px",
    starSpacing: "1px",
  };

  const handleaddtocart = (e, product) => {
    e.stopPropagation(); 
    e.preventDefault();  
    dispatch(addToCartAsync({ id: product._id, quantity }));
    setadded(true);
    setTimeout(() => {
      setadded(false);
    }, 20000);
    toast.success("Item added to cart!");
  };
   const perdis = Math.floor(
    100 - ((product?.price || 0) / (product?.oldprice || 90000)) * 100 //old price is hardcoded change it later
  );

  return (
    <div className="cardmain p-1  w-[180px] lg:w-[270px] lg:p-2 shadow-md bg-white flex flex-col">
      {/* ✅ Only image is clickable */}
      <Link href={`/product/${product._id}`}>
        <div className="aspect-[1/1] lg:aspect-[4/3] w-full flex items-center justify-center !overflow-hidden cursor-pointer">
          <img
            src={product.images[0].url}
            className="w-full h-full object-cover"
            alt="product"
          />
        </div>
      </Link>

      <div className="h-[30%] flex flex-col mt-2">
        <Link href={`/product/${product._id}`}>
          <div className="text-left  overflow-hidden text-[14px] w-full flex lg:text-sm flex-wrap font-medium cursor-pointer">
            {product.title.slice(0, 35)} ...
          </div>
        </Link>

        <div className="flex items-center justify-start text-left">
          <span className="text-[12px] mr-1 mt-[6px]">{product.ratings}</span>
          <StarRatings {...options} />
          <span className="text-[12px] ml-1 mt-[6px]">
            ({product.numofreview})
          </span>
        </div>

        <span className="pastbought text-[12px] lg:text-[14px] flex text-left">
          200+ bought in past month
        </span>

        <div className="discount mt-1 bg-[#CC0C39] px-2 rounded-[2px] w-[120px] lg:w-[130px] text-white text-[12px] lg:text-[14px]">
          Limited time deal
        </div>

        <div className="">
          <div className="start-0 flex flex-wrap">
            <div className="text-[18px] lg:text-[28px] price">
              ₹{product.price}
            </div>
            <div className="priceoff text-[12px] lg:text-[14px] pb-1 ml-1 mt-auto">
              M.R.P.: ₹<span className="line-through ">{product?.oldprice || 90000}</span>{" "}
              <span className="text-red-500">({perdis}% off)</span>
            </div>
          </div>

          <div className="flex mt-1 lg:mt-3 items-center">
           <button
              onClick={(e) => handleaddtocart(e, product)}
              className={`p-1  ${added ? "px-3" : "px-1"} flex flex-row justify-center !items-center ${added ? "gap-x-2" : "gap-x-1"} rounded-2xl px-2 font-small ${added ? "text-white" : "text-black"} text-[13px] transition-colors duration-300 ${
                added ? "!bg-purple-800" : "!bg-yellow-300"
              }`}
            >
              
             
              {added ? < BsFillCartCheckFill /> : <BsCartPlusFill />}
              {added ? "Added" : "Add to cart"}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
