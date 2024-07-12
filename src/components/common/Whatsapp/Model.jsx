import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
const Model = () => {
  return (
    <div>
      <div className="">
        <Image
          src="/whatsapp/chat.png"
          width={1000}
          height={1000}
          className="w-[300px] height-[300px]"
        />
        <div className="bg-white p-4">
          <Link
            href="https://alvo.chat/4C9O"
            target="__blank"
            className="flex justify-center bg-[#25D366] hover:bg-[#25D366]/80 text-white rounded-xl p-2 w-full"
          >
            <FaWhatsapp className="w-[15px] h-[30px] -mt-1 mr-2" />
            Start Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Model;
