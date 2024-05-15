"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";
const Tests = ({ mail }) => {
  const router = useRouter();
  const context = useContext(UserContext);
  const m = context?.user?.email;

  useEffect(() => {
    if (m !== mail && m != undefined) {
      router.push("/");
    }
  }, []);
  return <div></div>;
};

export default Tests;
