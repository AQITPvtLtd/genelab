import Privacy from "@/components/homepage/Privacy";
import HomeBanner from "@/components/homepage/HomeBanner";
import Section1 from "@/components/homepage/Section1";
import React from "react";
import Tests from "@/components/homepage/Tests";
import Contact from "@/components/homepage/Contact";
import Book from "@/components/homepage/Book";
const page = () => {
  return (
    <div>
      <HomeBanner />
      <Section1 />
      <Privacy />
      <Tests />
      <Contact />
      <Book />
    </div>
  );
};

export default page;
