import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="border text-gray-600 mt-5"></div>
        <div className="py-20 pl-10 pt-6 mt-[50px]">
          <div className="lg:grid grid-cols-12">
            {/* logo */}
            <div className="col-span-3">
              <Link href="/" className="">
                <Image
                  src="/logo2.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[250px] mb-4"
                />
              </Link>
              <p className="leading-normal">
                At GeneLab, we are dedicated to revolutionizing healthcare
                through cutting-edge genetic testing solutions.
              </p>
            </div>
            <div className="col-span-2">
              <div className="lg:flex justify-center mt-6">
                <div className="mb-6">
                  <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

                  <ul className="mb-0 list-none leading-loose">
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
              </div>
            </div>
            <div className="lg:flex justify-center mt-6 col-span-3">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Common Tests</h5>

                <ul className="mb-0 list-none leading-loose">
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
            {/* address */}
            <div className="mt-6 lg:ml-5 col-span-4">
              <div className="mb-6">
                <ul className="mb-0 list-none">
                  <li className="">
                    <h5 className="mb-2.5 font-bold uppercase">Address</h5>
                    <Link
                      href="https://maps.app.goo.gl/42gtbaZ928Hkwogv9"
                      target="__blank"
                      className="hover:text-blue"
                    >
                      S/F, 3 Floor, Bhaskar Bhawan, 1882/A, South, South Extension I, Kotla Mubarakpur, Sewa Nagar, New Delhi, Delhi 110003
                    </Link>
                  </li>

                  <li className="mt-3">

                    <Link
                      href="https://g.co/kgs/h3eZ9pw"
                      target="__blank"
                      className="hover:text-blue"
                    >
                      3rd floor floor no 1625, 1625, Sector 5, Vasundhara, Ghaziabad, Uttar Pradesh 201012
                    </Link>
                  </li>

                  <li className="mt-3 leading-normal">
                    <Link href="tel:+91-981 172 4700">
                      <h5 className="mb-2.5 font-bold uppercase">Phone</h5>
                      <div className="hover:text-blue">+91-981 172 4700</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Copyright section --> */}
        <div className="w-full bg-blue text-white p-4 text-center">
          © 2024 Copyright:
          <Link
            className="text-white font-semibold"
            href="https://tekbooster.com/"
          >
            TekBooster
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
