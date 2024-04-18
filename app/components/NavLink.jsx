import Link from "next/link";
import React from "react";

export default function NavLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4  sm:text-xl rounded md:p-0 hover:text-white"
    >
      <span className="md:hidden text-[#fff]">{title}</span>
      <span className="hidden md:block text-[#121212]">{title}</span>
    </Link>
  );
}
