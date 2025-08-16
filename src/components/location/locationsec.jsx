
import React from "react";

import { MdOutlineAddLocationAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Locationsec = () => {
  const [showadd,setshowadd]=useState("true");
  const [address,setaddress]=useState("");
 
  useEffect(()=>{
  const shippinginfo = JSON.parse(localStorage.getItem("shippinginfo"));
  const address = shippinginfo?.address;
  setaddress(address);
  },[])
  

  return (
    <div>
    {address ? (
      <div>
        <div className="flex bg-white px-5 justify-between items-center p-2">
          <div className="flex" >
          <span className="text-lg font-semibold mr-2">
        <CiLocationOn />
      </span>
       <span className="text-gray-600 text-sm">
        {address.slice(0,20)}...
      </span> 
          </div>
       
      <span className="text-lg font-semibold">
        <IoIosArrowDown />
      </span>
      </div>
      
    </div>
    ):(
        <div className="flex bg-white px-5 justify-between items-center p-2">
       
       <span className="text-gray-600 text-sm">
        Add your desired location.
      </span>
      <span className="text-lg font-semibold">
        <MdOutlineAddLocationAlt />
      </span>
    </div>
    )}
    </div>)
};
 
export default Locationsec;