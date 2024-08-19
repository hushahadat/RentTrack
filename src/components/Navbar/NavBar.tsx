"use client";

import { useAppContext } from "@/context/ApplicationContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const router = useRouter();
  const { userData, setUserData, setAppInfo } = useAppContext() || {};

  const handleLogOut = () => {
    localStorage.removeItem("__user__");
    setUserData(null);
    setAppInfo([]);
    router.push("/auth/sign-in");
  };
  const userName = userData?.name?.split(" ")[0];
  return (
    <nav className="bg-white border-b border-gray-300 px-4 py-2 flex justify-between items-center sticky">
      <div className="text-3xl font-bold text-gray-800">
        <Link href="/" className="hover:text-gray-700 font-logo">
          Rent It
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {userData?.name ? (
          <>
            <span className="text-gray-700">Hi. {userName}</span>
            <button
              onClick={handleLogOut}
              type="button"
              className=" bg-white text-blue-500 px-4 py-2 rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push("/auth/sign-in")}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
