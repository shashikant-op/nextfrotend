"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/users/userslice";
import { userdetails } from "@/redux/users/userdetailsslice";
import Rbutton from "@/components/UX/roundbutton";
import { useRouter } from "next/navigation";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userdata = useSelector((state) => state.userdetail);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.push("/login");
    } else {
      setToken(storedToken);
      dispatch(userdetails(storedToken));
    }
  }, [dispatch, router]);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!token) return null;

  return (
    <div>
      <div className="h-10 mt-1 p-2 items-center flex flex-row justify-between">
        <div className="w-50% flex items-center gap-x-2 flex-row">
          <div className="w-[30px] rounded-full bg-red-400 h-[30px]"></div>
          <div>{userdata?.data?.name}</div>
        </div>
        <div className="flex gap-x-5 flex-row justify-around">
          <button onClick={handleLogout}>Log-out</button>
          <div>Address</div>
        </div>
      </div>

      <div className="profileheader flex flex-row justify-evenly p-2 mt-2">
        <Link href="/orders" className="!text-black">
          <Rbutton value="Orders" />
        </Link>
       
        <Link href="/me" className="!text-black">
          <Rbutton value="Account" />
        </Link>

        {userdata?.data?.role === "admin" && (
          <Link href="/dashboard" className="!text-black">
            <Rbutton value="DashBoard" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Profile;
