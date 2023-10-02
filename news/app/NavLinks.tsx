"use client";

import React from "react";
import { categories } from "@/constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import path from "path";

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <nav
      className=" flex flex-wrap justify-around items-center text-xs md:text-sm  
   
     border-b w-full"
    >
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
};

export default NavLinks;
