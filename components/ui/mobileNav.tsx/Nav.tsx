"use client";
import Menu from "../Nav/Menu";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 ">
      <Link href={"/"}>
        <Image
          src={"/images/Logo.webp"}
          alt="logo"
          height={25}
          width={140}
        ></Image>
      </Link>

      <div className="sm:hidden lg:flex">
        <Menu />
      </div>
      <div className="lg:flex sm:hidden border bg-white rounded-l rounded-r">
        <Search className="bg-white" />
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r outline-none text-gray-600 font-semibold w-80"
        ></input>
      </div>
      <div className="bg-slate-200 rounded-full p-2 cursor-pointer hover:shadow-xl shadow-black sm:hidden lg:flex">
        <ShoppingCart className="absolute" />
        <span className="relative -top-4 -right-3 text-white bg-[#f02d34] font-bold h-5 w-5 text-center rounded-full">
          0
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
