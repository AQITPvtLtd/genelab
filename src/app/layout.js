import { Inter } from "next/font/google";
import Header from "@/components/common/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import ScrollToTop from "@/components/common/ScrollToTop/page";
import Footer from "@/components/common/Footer/Footer";
import UserProvider from "@/context/UserProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GeneLab",
  description: "Number 1 Genetic Testing Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
