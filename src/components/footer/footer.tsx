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
    <footer className="px-32 py-16">
      <div className="grid grid-cols-[1fr,max-content] px-8 py-6 gap-8 border-[#261718] border-2 bg-gradient-to-r from-[#161213] via-[#17171700] rounded-3xl drop-shadow-lg">
        <div className="flex flex-col px-3 py-3 m-0 items-center">
          <Image
            className="py-5"
            src="/logod.png"
            alt="logo"
            width={256}
            height={80}
          />
          <div className="flex flex-row text-white gap-2 px-2 py-2">
            {appSocial.map((d) => (
              <OneSocial {...d} key={d.href} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="px-14">
            <ul className="flex justify-between">
              <Link href="/kto-tu-gra">
                <li className="text-white text-2xl">kto tu gra</li>
              </Link>
              <Link href="/kim-sa">
                <li className="text-white text-2xl">kim są</li>
              </Link>
              <Link href="/jak-ich-dopasc">
                <li className="text-white text-2xl">jak ich dopaść</li>
              </Link>
              <Link href="/sociale">
                <li className="text-white text-2xl">sociale</li>
              </Link>
            </ul>
          </div>
          <div className="flex text-white text-xs gap-32 px-16">
            <p>dizajerofficial@gmail.com</p>
            <p>662 630 912</p>
            <p>COPYRIGHT 2023 © by Dizajer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
