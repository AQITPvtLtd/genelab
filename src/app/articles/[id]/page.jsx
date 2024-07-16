import React from "react";
import Detailed from "./Detailed";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <Detailed id={id} />
    </div>
  );
};

export default page;
