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
      className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10
   
     mx-auto border-b px-48"
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
