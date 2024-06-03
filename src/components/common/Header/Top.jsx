import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-blue text-white p-3 lg:flex justify-around">
      {/* social links */}
      <div className="flex justify-center lg:mb-0 mb-2 items-center">
        <Link
          href="https://www.linkedin.com/company/102062131/admin/feed/posts/"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex mr-6 text-body-color duration-300 hover:text-green"
        >
          <FaLinkedin className="mt-1 mr-1" />
          Visit Our LinkedIn
        </Link>
      </div>
      {/* mail and phone */}
      <div className="lg:flex justify-evenly">
        <Link
          href="tel:+91-981 172 4700"
          className="flex justify-center lg:mb-0 mb-2 mr-10 lg:ml-0 ml-5 hover:text-green"
        >
          <FaPhoneAlt className="mt-1 mr-1" />
          +91-981 172 4700
        </Link>
        <Link
          href="mailto:info@genelab.in"
          className="flex justify-center lg:mb-0 mb-2 lg:ml-0 -ml-9 hover:text-green"
        >
          <IoMail className="mt-1 mr-1" />
          info@genelab.in
        </Link>
      </div>
    </div>
  );
};

export default Top;
