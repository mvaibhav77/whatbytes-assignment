import Link from "next/link";
import React from "react";
import { FaAward, FaChartSimple } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";

const Sidenav = () => {
  return (
    <nav className="sidenav h-screen max-w-[300px] md:min-w-[250px] md:w-1/5 w-fit  md:py-12 px-2 py-6 border-r-[1px] border-slate-300 ">
      <ul className="flex flex-col gap-2 md:items-start items-start text-xl">
        <li className="md:px-10 px-4 w-full py-4 hover:bg-slate-200 rounded-full">
          <Link href="/" className="flex items-center gap-6 ">
            <FaChartSimple />
            <span className="md:block hidden">Dashboard</span>
          </Link>
        </li>
        <li className="md:px-10 px-4 w-full py-4 hover:bg-slate-200 rounded-full">
          <Link href="/skill" className="flex items-center gap-6 ">
            <FaAward />
            <span className="md:block hidden">Skill Set</span>
          </Link>
        </li>
        <li className="md:px-10 px-4 w-full py-4 hover:bg-slate-200 rounded-full">
          <Link href="/internship" className="flex items-center gap-6 ">
            <IoDocument />
            <span className="md:block hidden">Internship</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
