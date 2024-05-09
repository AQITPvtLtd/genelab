import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-blue text-white p-3 lg:flex justify-around">
      {/* social links */}
      <div className="flex justify-center lg:mb-0 mb-2 items-center">
        <Link
          href="https://www.instagram.com/lex__fori_?igshid=OGQ5ZDc2ODk2ZA==                    "
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-green"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://chat.whatsapp.com/BTGfLwVBqTJ3A1LQcA4iqS"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-green"
        >
          <IoLogoWhatsapp />
        </Link>
        <Link
          href="https://t.me/lex_fori"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 text-body-color duration-300 hover:text-green"
        >
          <FaTelegramPlane />
        </Link>
      </div>
      {/* mail and phone */}
      <div className="lg:flex justify-evenly">
        <div className="flex justify-center lg:mb-0 mb-2 mr-10 ">
          <FaPhoneAlt className="mt-1 mr-1" />
          +91-981 172 4700
        </div>
        <div className="flex justify-center lg:mb-0 mb-2">
          <IoMail className="mt-1 mr-1" />
          info@genelab.com
        </div>
      </div>
    </div>
  );
};

export default Top;
