'use client';

import { useState } from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { FiSearch } from "react-icons/fi"; 
import "@/styles/header.css"
const Header = () => {

  const cartCount = useSelector((state) => state.cart.cartCount);
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const handleprofile=()=>{
    const token=localStorage.getItem("token");
  if(!token){
    router.push("/login");
  }else{
    router.push("/profile");
  }
  }
  

  const onSearch = (e) => {
    e.preventDefault();
    const trimmed = keyword.trim();
    if (trimmed) {
      router.push(`/products?keyword=${trimmed}`);
    } else {
      router.push('/products');
    }
  };

  return (
    <header className="header  !text-white !bg-purple-700">
      {/* Logo */}
      <div className="header__logo items-center">
        <Link href="/">
          <h2 className="text-[15px] sm:text-2xl !mr-4 font-bold cursor-pointer">Opendoor</h2>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="header__nav !text-white">
        <Link href="/products">Products</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Search Bar */}
      <div className="text-gray-600 items-center bg-white rounded-2xl pl-2 sm:pl-0 sm:rounded border">
  <form className="mr-0 flex flex-row" onSubmit={onSearch}>
    <input
      className="w-30 sm:w-40 px-2 lg:px-1.5 sm:p-0 sm:m-0 md:py-1 lg:py-1 h-8 text-sm border-none rounded-none focus:outline-none focus:ring-0"
      onChange={(e) => setKeyword(e.target.value)}
      placeholder="Search products..."
      value={keyword}
    />
    <button
  type="submit"
  className="cursor-pointer h-full bg-gray-200 p-[4.5px] sm:px-1.5 rounded-r-sm text-gray-800 ml-0 flex items-center justify-center gap-1"
>
  {/* Icon for mobile only */}
  <span className="block r-0 sm:hidden">
    <FiSearch size={23} />
  </span>

  {/* Text for sm and up */}
  <span className="hidden sm:block">Search</span>
</button>
  </form>
</div>


      {/* Icons */}
      <div className="header__icons pr-3 gap-x-2 flex flex-row !items-center justify-center">
        <div className="header__icon flex items-center  ml-[10px]">
          <button onClick={handleprofile} className="!text-white">
            <FaUserCircle size={22} />
          </button>
        </div>
        <div className="header__icon header__cart relative ml-[10px]">
          <Link href="/cart" className="!text-white">
            <FaShoppingCart size={22} />
          </Link>
          <span className="header__cart-count absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
            {cartCount || 0}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
