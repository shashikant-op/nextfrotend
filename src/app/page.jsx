"use client";

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
import Allproduct from "@/components/products/allproducts";
import Categoryfilter from "@/components/products/categoryfilter";
import Locationsec from "@/components/location/locationsec";
import About from "@/components/aboutus/about";
import City from "@/components/city/city";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproducts({ keyword: "" }));
  }, [dispatch]);
const {Loading,setLoading}=useState(true);
  const { isLoading,error } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.data);
  // const products = data?.products || [];
  console.log("product",products);

  return (
    
    <main className=" flex gap-y-2 flex-col " >
      <div className="  flex  h-198   overflow-hidden lg:px-2 flex-row justify-between items-start  bg-gray-200">
        <div className="hidden lg:flex  bg-white items-center ">
          <Categoryfilter />
          </div>
        <div className="flex   gap-y-1 flex-col overflow-x-hidden md:w-[1125px]">
          <div>
            <Locationsec />
          </div>
          <div className="flex bg-white items-center lg:hidden w-full overflow-x-scroll scroll-smooth scrollbar-hide min-w-0">
            <Categoryfilter />
          </div>
            <Pagetitle title="Opendoor" />
        <div className="flex  bg-white ">
          <Banner/>
        </div>
        <div className="bg-white">
          <Allproduct />
        </div>
      </div>
    </div>
      <div className=" mt-10 select-none">
        <About />
      </div>
      <div className="select-none">
        <City />
      </div>

    </main>
  );
}
