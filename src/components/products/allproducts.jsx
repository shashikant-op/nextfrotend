
import React, { useEffect } from "react";
import Banner from "@/components/Banner/banner";
import Card from "@/components/Cards/card";
import Pagetitle from "@/components/Layout/pagetitle";
import { useSelector, useDispatch } from "react-redux";
import { fetchproducts } from "@/redux/products/productslice";
import HtmlComponent from "@/components/producthomeloader";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { useState } from "react";

export default function Allproduct(){
    const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(fetchproducts({ keyword: "" }));
      }, [dispatch]);
    const {Loading,setLoading}=useState(true);
      const { isLoading,error } = useSelector((state) => state.products);
      const products = useSelector((state) => state.products.data);
      // const products = data?.products || [];
      console.log("product",products);
    return(
        <div className="p-1">
        <div className="flex start-0 text-black text-[18px]  justify-center items-center ">
          <div className="producttitle w-full flex flex-row justify-between px-3 p-2">
            <div>
              <span className="!w-full">All Products</span>
            </div>
            <div>
              <Link href="/products" className="cursor-pointer">
                <GoArrowRight />
              </Link>
            </div>
          </div>
        </div>

       {isLoading ? (
        <div className="w-full h-[310px] overflow-hidden">
             <HtmlComponent />
        </div>
         
            
          ) : error ? (
            <div className="w-full flex justify-center items-center h-14 bg-red-600">
            <p className="px-3 text-white">Error loading products.</p>
            </div>
          ) : (
            <div className="w-full custom-scrollbar scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="flex gap-2  p-2 !w-full justify-start">
                {products.map((product) => (
                  <div key={product._id}>
                    <Card product={product} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
}