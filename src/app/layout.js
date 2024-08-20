"use client";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/common/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import ScrollToTop from "@/components/common/ScrollToTop/page";
import Footer from "@/components/common/Footer/Footer";
import UserProvider from "@/context/UserProvider";
import Whatsapp from "@/components/common/Whatsapp/Whatsapp";
import Popup from "@/components/Popup";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "GeneLab",
//   description: "Number 1 Genetic Testing Company",
// };

export default function RootLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 15000); // Show popup every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <Header />
          {children}
          {showPopup && <Popup onClose={handleClosePopup} />}
          <Whatsapp />
          <ScrollToTop />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
