import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon  className="h-8 w-8 cursor-pointer"/>
        <Link href="/">
          <h1>The Daily News</h1>
        </Link>
        <div>
            <button>
                Subscribe Now
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
