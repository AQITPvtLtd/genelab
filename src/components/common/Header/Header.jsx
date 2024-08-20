"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import UserContext from "@/context/UserContext";
import menuData from "./menuData";
import Top from "./Top";
import { logout } from "@/services/user";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const context = useContext(UserContext);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const usePathName = usePathname();
  const path = usePathName.split("/");
  let filteredPath = path[1];
  if (filteredPath == "") {
    filteredPath = "/";
  }
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const handleLogout = async () => {
    try {
      await logout();
      context.setUser(undefined);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const [openSubIndex, setSubOpenIndex] = useState(-1);

  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); // Close the submenu if it's already open
    } else {
      setOpenIndex(index); // Open the clicked submenu
    }
  };

  return (
    <div
      className={`overflow-x-clip header left-0 z-40 top-0 w-full items-center  backdrop-blur-sm bg-white  font-semibold ${
        sticky
          ? "fixed z-40 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent"
      }`}
    >
      <Top />
      <header className="flex">
        <div className="">
          <div className="relative flex w-screen justify-between">
            {/*logo*/}
            <div className="lg:w-[300px] w-[340px] lg:px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-2"
                } `}
              >
                <Image
                  src="/logo2.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[200px] ml-4 left-0 p-3"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* hamburger */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-[#321f05] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`ml-28 navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-4">
                    {menuData.map((menuItem, index) => (
                      <li
                        key={index}
                        className="group relative lg:flex hover:text-blue"
                      >
                        <Link
                          href={menuItem.path}
                          className={`py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            filteredPath === menuItem.select
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                        {menuItem.submenu && (
                          <>
                            {/* open submenu button */}
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between text-lg text-dark group-hover:text-[#321f05] dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-1"
                            >
                              <span className="">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full lg:ml-0 ml-4 rounded-sm bg-white transition-[top] duration-300 lg:absolute lg:top-[110%] lg:w-[250px] lg:p-4 lg:shadow-lg ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  // href={"/"}
                                  href={submenuItem.path}
                                  key={index}
                                  className={`block rounded py-2.5 text-sm text-dark hover:text-[#321f05] lg:px-3 ${
                                    filteredPath === submenuItem.select
                                      ? "text-primary"
                                      : ""
                                  }`}
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
