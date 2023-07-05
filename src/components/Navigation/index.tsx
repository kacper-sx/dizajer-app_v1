"use client";

import OneLink, { NavLinkProps } from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const appLinks: NavLinkProps[] = [
  {
    href: "/kto-tu-gra",
    content: "Kto tu gra",
  },
  {
    href: "/kim-sa",
    content: "kim są",
  },
  {
    href: "/jak-ich-dorwac",
    content: "jak ich dorwać",
  },
  {
    href: "/sociale",
    content: "sociale",
  },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-24 shadow-xl bg-[#0D0808] ">
      <div className="flex justify-between items-center h-full w-full px-8 py-8">
        <Link href="/">
          <div
            id="NavLogo"
            className="w-12 h-12 rounded-xl bg-[#D71F26] flex items-center justify-center text-[#0D0808] text-3xl"
          >
            <Image src="/logoNav.svg" alt="logo" width={48} height={48} />
          </div>
        </Link>
        <div className="flex">
          <ul className="sm:hidden flex gap-8">
            {appLinks.map((d) => (
              <OneLink {...d} key={d.content} />
            ))}
          </ul>

          <AiOutlineMenu
            onClick={handleMenu}
            className="md:hidden lg:hidden xl:hidden text-5xl text-[#D71F26] cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Version Listed Items */}
      <div
        className={
          menuOpen
            ? "pt-8 pb-16 relative bg-[#0D0808] justify-center z-30"
            : "hidden"
        }
      >
        <ul className="flex flex-col gap-6 justify-center items-center">
          {appLinks.map((d) => (
            <OneLink {...d} key={d.content} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
