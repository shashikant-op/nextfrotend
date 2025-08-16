"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPage() {
  const { token } = useParams(); // from [token] in URL
  const router = useRouter();

  const [form, setForm] = useState({ password: "", confirmpass: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      await axios.put(`${BACKEND}/reset/password/${token}`, {
        password: form.password,
        confirmpassword: form.confirmpass,
      });

      toast.success("Password reset successful!");
      router.push("/login");
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Something went wrong";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="p-4 px-5 min-h-screen flex items-center justify-center">
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-center mb-2">Reset Your Password</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmpass"
            required
            value={form.confirmpass}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full !bg-purple-600 hover:!bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Set Password
        </button>
      </form>
    </div>
  );
}
