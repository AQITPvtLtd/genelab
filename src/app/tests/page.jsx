import React from "react";
import Test from "./Test";

const page = () => {
  const adminMail = process.env.MY_EMAIL;
  return (
    <div>
      <Test mail={adminMail} />
    </div>
  );
};

export default page;
