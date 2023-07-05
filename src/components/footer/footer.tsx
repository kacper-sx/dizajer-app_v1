import Image from "next/image";
import { BiLogoFacebook, BiLogoYoutube, BiLogoTiktok } from "react-icons/bi";

import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";
import OneSocial, { SocialItemsProps } from "./OneSocial";

const appSocial: SocialItemsProps[] = [
  {
    href: "https://www.facebook.com/desire.parczew",
    icon: BiLogoFacebook,
  },
  {
    href: "https://www.instagram.com/czy_to_dizajer",
    icon: AiFillInstagram,
  },
  {
    href: "https://www.youtube.com/@DizajerOfficial",
    icon: BiLogoYoutube,
  },
  {
    href: "https://www.tiktok.com/@czy_to_dizajer",
    icon: BiLogoTiktok,
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-center px-32 md:px-16 sm:px-8 py-16 sm:py-4">
      <div className="flex md:flex-row sm:flex-col px-16 sm:px-8 py-6 gap-16 sm:gap-8 border-[#261718] border-2 bg-gradient-to-r from-[#161213] via-[#17171700] rounded-3xl drop-shadow-lg">
        <div className="flex flex-col py-3 sm:py-0">
          <Image
            className="self-center py-5"
            src="/logod.png"
            alt="logo"
            width={256}
            height={80}
          />
          <div className="flex flex-row text-white gap-2 sm:gap-4 px-2 py-2 justify-around sm:justify-center">
            {appSocial.map((d) => (
              <OneSocial {...d} key={d.href} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between sm:gap-10">
          <ul className="flex flex-row sm:flex-col justify-between gap-24 md:gap-12 sm:gap-8 text-white text-xl sm:text-3xl sm:items-center">
            <Link href="/kto-tu-gra">
              <li>kto tu gra</li>
            </Link>
            <Link href="/kim-sa">
              <li>kim są</li>
            </Link>
            <Link href="/jak-ich-dopasc">
              <li>jak ich dopaść</li>
            </Link>
            <Link href="/sociale">
              <li>sociale</li>
            </Link>
          </ul>
          <div className="flex flex-row sm:flex-col text-white sm:text-base text-xs gap-24 md:gap-12 sm:gap-4 justify-around items-center">
            <p>dizajerofficial@gmail.com</p>
            <p>662 630 912</p>
            <p>COPYRIGHT 2023 © by Dizajer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
