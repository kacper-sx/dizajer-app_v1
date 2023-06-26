import React from "react";
import Link from "next/link";
export type NavLinkProps = {
  href: string;
  content: string;
};

export default function OneLink(props: NavLinkProps) {
  const { href, content } = props;
  return (
    <Link href={href}>
      <li className="text-white text-base">{content}</li>
    </Link>
  );
}

// const Navbar = () => {
//   return (
// <nav className="fixed w-full h-24 shadow-xl bg-[#171717] ">
//   <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
//     <Link href="/" className="text-white">
//       DESIRE LOGO
//     </Link>
//     <div>
//       <ul className="flex gap-8">
//         <Link href="/kto-tu-gra">
//           <li className="text-white text-base">kto tu gra</li>
//         </Link>
//         <Link href="/kim-sa">
//           <li className="text-white text-base">kim są</li>
//         </Link>
//         <Link href="/jak-ich-dopasc">
//           <li className="text-white text-base">jak ich dopaść</li>
//         </Link>
//         <Link href="/sociale">
//           <li className="text-white text-base">sociale</li>
//         </Link>
//       </ul>
//     </div>
//   </div>
// </nav>
//   );
// };

//export default Navbar;
