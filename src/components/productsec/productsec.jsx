import react from "react";
import { useState, useEffect } from "react";
import { fetchproducts } from "@/redux/products/productslice";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Card from "../Cards/card";
import Productsecloader from "../Loader/productsecloader";
import { useSelector } from "react-redux";



export default function Productsec({category}){
const dispatch=useDispatch();

useEffect(() => {
    if (category) {
      console.log("category", category);
      dispatch(fetchproducts({ category:  category  }));
    }
  }, [dispatch, category]);
 const { isLoading, error } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.data);
  console.log("product",products);
    return(
        <div>
            <div className="p-1 ">
        <div className="flex start-0 text-black text-[18px] px-1 bg-transparent p-1">
          <div className="producttitle w-full flex flex-row justify-between px-3 p-2 mb-2">
            <div>
              <span className="!w-full ">Similar product</span>
            </div>
            <div>
              <Link href={`/catproduct?category=${encodeURIComponent(category)}`} className="cursor-pointer">
                <GoArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Productsecloader />
        ) : (
          <div className="w-full custom-scrollbar overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-4 p-2 !w-full justify-start">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <div key={product._id}>
                    <Card product={product} />
                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        )}
      </div>

        </div>
    )
}