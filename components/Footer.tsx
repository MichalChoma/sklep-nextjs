import React, { ReactNode } from "react";
import Link from "next/link";

type FooterProp = {
  children?: React.ReactNode
}

const Footer = ( {children}:FooterProp ) => {
  return (
    <footer className="w-full bg-slate-50 border-t-[1px] border-gray-300">
      <div className="px-6 py-3 flex justify-between container mx-auto">
        <Link href="/">
          <a>
            <div className="bg-gray-200 w-32 py-5 rounded-xl"></div>
          </a>
        </Link>
        {children}
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
