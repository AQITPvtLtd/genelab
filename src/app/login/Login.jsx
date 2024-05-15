"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { login } from "@/services/user";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const context = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.email == "" || loginData.email == null) {
      toast.warning("Enter Email", {
        position: "bottom-center",
      });
      return;
    }
    if (loginData.password == "" || loginData.password == null) {
      toast.warning("Enter password", {
        position: "bottom-center",
      });
      return;
    }

    try {
      const result = await login(loginData);
      console.log(result);
      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result));
        toast.success(result.message, {
          position: "bottom-center",
        });
        context.setUser(result.user);
        router.push("/");
      } else {
        toast.error(result.message, {
          position: "bottom-center",
        });
      }

      //showing user data on login // no need to refresh
    } catch (error) {
      console.log(error);
      toast.error("Unable to login", {
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="overflow-x-clip lg:mt-[150px] md:mt-[110px] sm:mt-[120px] mt-[120px]">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue to-green shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Admin Login</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        id="id"
                        name="id"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email Id"
                        onChange={(event) => {
                          setLoginData({
                            ...loginData,
                            email: event.target.value,
                          });
                        }}
                        value={loginData.email}
                      />
                      <label
                        htmlFor="id"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Id
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        onChange={(event) => {
                          setLoginData({
                            ...loginData,
                            password: event.target.value,
                          });
                        }}
                        value={loginData.password}
                      />
                      <label
                        for="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <button className="bg-blue text-white rounded-md px-2 py-1">
                        Login
                      </button>
                      {/* <div className="flex text-sm mt-2">
                        <p>Not a member?</p>
                        <span>
                          <Link
                            className="text-primary hover:underline"
                            href="/register"
                          >
                            Register
                          </Link>
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
