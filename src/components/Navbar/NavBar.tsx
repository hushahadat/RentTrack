"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="bg-white border-b border-gray-300 px-4 py-2 flex justify-between items-center sticky">
      <div className="text-3xl font-bold text-gray-800">
        <Link href="/" className="hover:text-gray-700 font-logo">
          Rent It
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => router.push("/auth/sign-in")}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Log In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
