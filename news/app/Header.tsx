import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header>
      <span className=" flex space-between p-10 w-full ">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center  ">The Daily News</h1>
        </Link>
        <span className="ml-auto flex justify-center ">
        
          <DarkModeButton />
          {/* <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button> */}
        </span>
      </span>
      {/* <div className="grid grid-cols-3 p-10 items-center"> */}
        {/* <Bars3Icon className="h-8 w-8 cursor-pointer" /> */}

        {/* <div className="flex items-center justify-end space-x-2"></div>
      </div> */}
      <NavLinks />
      <SearchBox />
    </header>
  );
};

export default Header;
