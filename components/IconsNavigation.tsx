import React from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import Link from "next/link";

const icons = [
  {
    href: "/user",
    icon: <AiOutlineUser />,
  },
  {
    icon: <AiOutlineShoppingCart />,
  },
  {
    icon: <AiOutlineSearch />,
  },
];

const IconsNavigation = () => {
  return (
    <ul className="flex divide-x border-x">
      {icons.map((icon, idx) => (
        <li
          className="p-2 text-lg hover:bg-gray-100 rounded-sm cursor-pointer lg:p-4"
          key={idx}
        >
          <Link href={icon.href ? icon.href : ""}>{icon.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default IconsNavigation;
