import OneLink, { NavLinkProps } from "./Navbar";
import Link from "next/link";

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
        <Link href="/" className="text-white">
          DESIRE LOGO
        </Link>
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
