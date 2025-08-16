"use client";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchproducts } from "@/redux/products/productslice";
import Card from "@/components/Cards/card";
import Pagination from "react-js-pagination";
import "@/styles/pagination.css";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import ProductHomeLoader from "@/components/producthomeloader";
import { useSearchParams } from "next/navigation";
import { IoFilterOutline } from "react-icons/io5";
import { MdFilterListOff } from "react-icons/md";
function Allproducts() {
  const searchparams = useSearchParams();
  const keyword = searchparams.get("keyword") || "";

  const [currpage, setcurrpage] = useState(1);
  const [price, setprice] = useState([0, 200000]);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchproducts({ keyword, currpage, price, category:category })); ////there is problem with the catefory
  }, [dispatch, keyword, currpage, price, category]);

  const { isLoading, error, resultperpage, productcount } = useSelector(
    (state) => state.products
  );
  const products = useSelector((state) => state.products.data);
  // const products = data ? data.products : [];

  const setpage = (pageNumber) => {
    setcurrpage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePriceChange = (event, price) => {
    setprice(price);
  };
const handleCategoryClick = (selectedCat) => {
   setcategory(selectedCat);
  };
  
  return (
     <>
          {/* 🔘 Mobile Filter Toggle */}
          <div 
          className="sm:hidden flex justify-between items-center py-2 px-4 bg-white shadow-sm">
        <div
         onClick={() => setShowFilter(!showFilter)}
        >
              {showFilter ? (<MdFilterListOff className=" rounded-full text-[24px]" />) : (<IoFilterOutline className="rounded-full text-[24px]" />)}
            
        </div>
          </div>
    
          {/* 🔍 Filter Section */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showFilter ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            } sm:max-h-full sm:opacity-100 sm:block bg-white border-t sm:border-none`}
          >
            <div className="w-full py-5 bg-gray-100 shadow-sm sm:shadow-none rounded-lg flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border border-gray-200 sm:border-none">
              {/* 🟢 Price Range */}
              <div className="flex flex-col gap-2 px-4 w-full sm:w-[55%]">
                <label className="text-base font-semibold text-gray-800">
                  Price Range
                </label>
                <div className="w-full sm:w-72">
                  <Slider
                    value={price}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={200000}
                    sx={{ color: "#7C3AED" }}
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>₹{price[0]}</span>
                    <span>₹{price[1]}</span>
                  </div>
                </div>
              </div>
    
              {/* 🟣 Category Pills */}
              <div className="w-full sm:w-[45%]">
                <div className="flex justify-between items-center mb-2 px-3">
                  <label className="text-base font-semibold text-gray-800">
                    Categories
                  </label>
                 
                </div>
    
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex flex-wrap  w-max gap-2 content-start pr-4 px-3">
                    {[
                      "Living",
                      "Study",
                      "Decoration",
                      "Bed",
                      "Door",
                      "Puja",
                      "Chair",
                      "Kitchen",
                      "Cabinet",
                      "Dining",
                      "Shelf",
                      "Office",
                      "Wall",
                      "Ceiling",
                    ].map((categoryItem) => {
                      const isActive =
                        category === categoryItem.toLowerCase();
                      return (
                        <span
                          key={categoryItem}
                          onClick={() => handleCategoryClick(categoryItem)}
                          className={`flex-shrink-0 whitespace-nowrap cursor-pointer px-3 py-1 rounded-full text-sm transition-all duration-200 border ${
                            isActive
                              ? "bg-purple-800 text-white border-purple-800"
                              : "bg-gray-100 hover:bg-purple-800 hover:text-white"
                          }`}
                        >
                          {categoryItem}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
    

      {/* Product Cards */}
      <div>
        {isLoading ? (
          <ProductHomeLoader />
        ) : (
          <div className="mb-[24px] pt-2 bg-white gap-y-1 justify-evenly flex flex-row  flex-wrap">
            {products && products.length > 0 ? (
              products.map((product) => (
                <Card key={product._id} product={product} />
              ))
            ) : (
              <ProductHomeLoader />
            )}
          </div>
        )}

        {/* Pagination */}
        <div className="pagination">
          <Pagination
            activePage={currpage}
            itemsCountPerPage={resultperpage}
            totalItemsCount={productcount}
            pageRangeDisplayed={5}
            nextPageText="Next →"
            prevPageText="← Prev"
            onChange={setpage}
            itemClass="page-item"
            linkClass="page-link"
            activeClass="activepageclass"
            activeLinkClass="activepagelink"
          />
        </div>
      </div>
    </>
  );
}

export default Allproducts;
