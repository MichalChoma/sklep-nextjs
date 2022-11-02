import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const links = [
  {
    href: "/",
    text: "Główna",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/products/1",
    text: "SSG",
  },
  {
    href: "/Csr",
    text: "CSR",
  },
];

const LinksNavigation = () => {
  const router = useRouter();
  console.log(router.pathname.slice(0,4))
  return (
    <div className="mr-4 hidden sm:flex">
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <a
            className={
              router.pathname.slice(0,4) === link.href.slice(0,4)
                ? "mx-2 p-2 rounded-xl bg-gray-300 text-sm font-medium"
                : "mx-2 p-2 rounded-xl text-sm hover:bg-gray-200 font-medium"
            }
          >
            {link.text}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LinksNavigation;
