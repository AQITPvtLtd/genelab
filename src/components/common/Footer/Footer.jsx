import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className=" items-center text-center text-surface">
        <div className="container px-6 pt-6">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo2.png"
              alt="logo"
              width={200}
              height={200}
              className="w-[200px] ml-4 left-0 mb-4"
            />
          </Link>
          {/* <!-- Social media icons container --> */}
          <div className="mb-6 flex justify-center space-x-2 ml-3">
            <Link
              href="#!"
              type="button"
              className="rounded-full bg-darkgreen text-white p-3 uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <FaLinkedin />
            </Link>
          </div>
          {/* <!-- Copyright information --> */}
          <div className="mb-6">
            <p>
              At GeneLab, we are dedicated to revolutionizing healthcare through
              cutting-edge genetic testing solutions. Our mission is to empower
              individuals, healthcare providers, and researchers with
              comprehensive insights into genetic predispositions, disease
              risks, and personalized treatment options.
            </p>
          </div>

          {/* <!-- Links section --> */}
          <div className="grid grid-cols-2">
            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

              <ul className="mb-0 list-none">
                <li>
                  <Link href="/" className="hover:text-darkgreen">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/who-are-we"
                    className="hover:text-darkgreen"
                  >
                    Who Are We
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/why-choose-us"
                    className="hover:text-darkgreen"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-darkgreen">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="mb-2.5 font-bold uppercase">Our Tests</h5>

              <ul className="mb-0 list-none">
                <li>
                  <Link href="/tests/1" className="hover:text-blue">
                    Comprehensive Cancer Panel Testing
                  </Link>
                </li>
                <li>
                  <Link href="/tests/2" className="hover:text-blue">
                    Hereditary Cancer Gene Testing
                  </Link>
                </li>
                <li>
                  <Link href="/tests/3" className="hover:text-blue">
                    Tumor Profiling
                  </Link>
                </li>
                <li>
                  <Link href="/tests/4" className="hover:text-blue">
                    Liquid Biopsy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Copyright section --> */}
        <div className="w-full bg-blue text-white p-4 text-center">
          © 2024 Copyright:
          <Link
            className="text-white font-semibold"
            href="https://tw-elements.com/"
          >
            TekBooster
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
