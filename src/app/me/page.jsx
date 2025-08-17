"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/users/userslice";
import { userdetails } from "@/redux/users/userdetailsslice";
import { useRouter } from "next/navigation";
import Link from "next/link";
<<<<<<< HEAD
import AuthPage from "../login/page";
import Rbutton from "@/components/UX/roundbutton";
=======
import Rbutton from "@/components/UX/roundbutton";
import AuthPage from "../login/page";
>>>>>>> 7913b188123d5d67013a555afca90ce32e66dcc1

const ProfilePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const userdata = useSelector((state) => state.userdetail);

  useEffect(() => {
    if (token) {
      dispatch(userdetails(token));
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/login");
  };
  // tokenverification

  if (!token) {
    return <AuthPage />;
  }

  return (
    <div className="px-4 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-red-400"></div>
          <span className="font-medium">{userdata?.data?.name || "User"}</span>
        </div>
        <div className="flex gap-4">
          <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
          <span className="text-gray-600">Address</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-evenly gap-3">
        <Link className="text-black" href="/orders">
          <Rbutton value="Orders" />
        </Link>
        <Link className="text-black" href="/buy-again">
          <Rbutton value="Buy Again" />
        </Link>
        <Link className="text-black" href="/me">
          <Rbutton value="Account" />
        </Link>
        {userdata?.data?.role === "admin" && (
          <Link className="text-black" href="/dashboard">
            <Rbutton value="DashBoard" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
