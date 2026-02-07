import React, { useEffect } from "react";
import Banner from "@/components/Banner/banner";
import Card from "@/components/Cards/card";
import Pagetitle from "@/components/Layout/pagetitle";
import { useSelector, useDispatch } from "react-redux";
import { fetchproducts } from "@/redux/products/productslice";
import HtmlComponent from "@/components/producthomeloader";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export default function Allproduct() {
  const dispatch = useDispatch();

  // ✅ Fetch products once on mount
  useEffect(() => {
    dispatch(fetchproducts({ keyword: "" }));
  }, [dispatch]);

  // ✅ Correct Redux state usage
  const { isLoading, error, data } = useSelector(
    (state) => state.products
  );

  const products = data || [];

  return (
    <div className="p-1">
      {/* Title */}
      <div className="flex text-black text-[18px] justify-center items-center">
        <div className="producttitle w-full flex flex-row justify-between px-3 p-2">
          <span>All Products</span>
          <Link href="/products" className="cursor-pointer">
            <GoArrowRight />
          </Link>
        </div>
      </div>

      {/* Loader */}
      {isLoading ? (
        <div className="w-full h-[310px] overflow-hidden">
          <HtmlComponent />
        </div>

      ) : error ? (
        /* Error */
        <div className="w-full flex justify-center items-center h-14 bg-red-600">
          <p className="px-3 text-white">Error loading products.</p>
        </div>

      ) : (
        /* Products */
        <div className="w-full custom-scrollbar scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-2 p-2 justify-start">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id}>
                  <Card product={product} />
                </div>
              ))
            ) : (
              <p className="text-center w-full">No products found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
