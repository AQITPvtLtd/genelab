import Privacy from "@/components/homepage/Privacy";
import HomeBanner from "@/components/homepage/HomeBanner";
import Section1 from "@/components/homepage/Section1";
import React from "react";
import Tests from "@/components/homepage/Tests";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Book from "@/components/homepage/Book";
import Choose from "@/components/homepage/Choose";
import Articles from "@/components/homepage/Articles";
const page = () => {
  return (
    <div>
      <HomeBanner />
      <Section1 />
      <Privacy />
      <Banner />
      {/* <Tests /> */}
      <Articles />
      <Choose />
      <Contact />
      <Book />
    </div>
  );
};

export default page;
