import React from "react";
import Edit from "./Edit";
const page = () => {
  const adminMail = process.env.MY_EMAIL;
  return (
    <div className="mt-[220px] lg:[190px]">
      <Edit mail={adminMail} />
    </div>
  );
};

export default page;
