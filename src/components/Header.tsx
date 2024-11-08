import Image from "next/image";
import React from "react";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full flex flex-row items-center justify-between md:py-6 md:px-10 p-4">
      {/* LOGO */}
      <div className="logo text-2xl flex items-center gap-3">
        <MdDashboard className="text-3xl" />
        <h1 className="">WhatBytes</h1>
      </div>

      {/* USER BUTTON */}
      <div className="user flex gap-2 px-3 py-1 border border-slate-400 rounded-md">
        {/* avatar */}
        <Image
          src={"https://github.com/shadcn.png"}
          alt="Avatar"
          height={20}
          width={20}
          className="rounded-full"
        />

        {/* Name */}
        <h2 className="user-name">Vaibhav Shukla</h2>
      </div>
    </header>
  );
};

export default Header;
