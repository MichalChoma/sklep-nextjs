import React from "react";
import Link from "next/link";
import IconsNavigation from "./IconsNavigation";
import LinksNavigation from "./LinksNavigation";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <header className="w-full bg-slate-50 border-b-[1px] border-gray-300">
      <nav className="px-6 py-3 flex justify-between container mx-auto items-center">
      <Link href="/"><a><div className="bg-gray-200 w-32 py-5 rounded-xl"></div></a></Link>
        <div className="flex items-center">
          <LinksNavigation />
          <IconsNavigation />
          <div className="flex sm:hidden cursor-pointer pl-4 py-2">
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
