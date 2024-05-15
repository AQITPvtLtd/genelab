"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";
import Link from "next/link";

const Edit = ({ mail }) => {
  const context = useContext(UserContext);
  const router = useRouter();
  const m = context?.user?.email;

  useEffect(() => {
    if (m !== mail && m != undefined) {
      router.push("/");
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 mx-10">
        <Link href="/admin/edit/tests">
          <div className="border border-blue rounded-xl p-3">Add Tests</div>
        </Link>
      </div>
    </div>
  );
};

export default Edit;
