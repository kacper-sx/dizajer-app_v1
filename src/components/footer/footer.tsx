import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-[#161213] via-[#171717] mt-auto mb-2 rounded-3xl mx-32">
      <div className="grid grid-cols-[1fr,max-content] px-8 py-6">
        <div className="flex flex-col px-3 py-3 m-0">
          <Image
            className="py-5"
            src="/logod.png"
            alt="logo"
            width={256}
            height={80}
          />
          <div className="flex flex-col text-white"> sociale </div>
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
