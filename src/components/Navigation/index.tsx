import OneLink, { NavLinkProps } from "./Navbar";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <nav className="h-24 shadow-xl bg-[#0D0808] ">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="w-12 h-12 rounded-xl bg-[#D71F26] flex items-center justify-center text-black text-3xl">
          <Link href="/" className="text-white">
            <Image alt="home" src="/logo.svg" width={48} height={45} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-8">
            {appLinks.map((d) => (
              <OneLink {...d} key={d.content} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
