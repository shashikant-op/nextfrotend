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
    <main className="flex bg-gray-200  gap-y-1 flex-col overflow-hidden">
      <div>
        <Locationsec />
      </div>
      <div className="flex bg-white items-center ">
        <Categoryfilter />
      </div> 
      
      <Pagetitle title="Opendoor" />
      <div className="flex  bg-white ">
        <Banner/>
      </div>
    <div className="bg-white">
    <Allproduct /> 
    </div>
    <div>
      <About />
    </div>
    <div>
      <City />
    </div>
    </main>
  );
}
