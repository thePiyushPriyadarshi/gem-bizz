import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const links = [
  {
    label: "WHO WE ARE",
    value: "/",
  },
  {
    label: "WHAT WE DO",
    value: "/",
  },
  {
    label: "NEWS",
    value: "/",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-2xl">
      <div className="max-w-[1180px] mx-auto py-2 text-primary-foreground flex items-center justify-between">
        <div>
          <Image alt="logo" src="/logo.jpg" width={48} height={48} />
        </div>
        <div className="space-x-10">
          {links.map((link) => (
            <Link href={link.value} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href={"/customize-plans"}>
          <Button className="bg-teal-400" variant={"secondary"}>Consultation Customization</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
