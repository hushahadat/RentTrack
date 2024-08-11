"use client";
import LoadingSpinner from "@/components/spinner/LoadingSpinner";
import { useAppContext } from "@/context/ApplicationContext";
import { loginUserByEmailAndPassword } from "@/utils/api_call";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "" });
  const [loadng, setIsloading] = useState(false);
  const { setUserData } = useAppContext() || {};

  const handleLogin = async () => {
    try {
      const res = await loginUserByEmailAndPassword(email, password);
      if (res.status === "success") {
        const dataToSet = res.data;
        setUserData(dataToSet);
        localStorage.setItem("__user__", JSON.stringify(dataToSet));
        router.push("/");
        setIsloading(false);
        return;
      }
      console.log("Failed Login", { res });//add  toaster
      setIsloading(false);
    } catch (er) {
      setIsloading(false);
      console.log("🚀 ~ handleLogin ~ ̥:", { er });
    }
  };
  function validateForm() {
    let er = { email: "", password: "" };
    if (!email || !emailRegex.test(email)) {
      er.email = "Enter the proper email";
    }
    if (!password || password.length < 6) {
      er.password = "Password should be at least 6 characters";
    }
    setError(er);
    return er;
  }
  const handleLoginClick = () => {
    const er_res = validateForm();
    if (!er_res?.email && !er_res?.password) {
      setIsloading(true);
      handleLogin();
    }
  };
  return (
    <React.Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-center text-3xl font-bold mb-6">Instagram</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number, username, or email
              </label>
              <input
                type="text"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError({ ...error, email: "" });
                }}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError({ ...error, password: "" });
                }}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
            <div>
              <button
                className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLoginClick();
                }}
              >
                {loadng && <LoadingSpinner />}
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="block h-px w-1/3 bg-gray-300"></span>
              <span className="text-sm text-gray-500">OR</span>
              <span className="block h-px w-1/3 bg-gray-300"></span>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm">
              Don&apos;t have an account ?
              <a href="/" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SignIn;
