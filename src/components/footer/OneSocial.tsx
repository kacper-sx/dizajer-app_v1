import { IconType } from "react-icons";
import Link from "next/link";

export type SocialItemsProps = {
  icon: IconType;
  href: string;
};

export default function OneSocial(props: SocialItemsProps) {
  const { icon: Icon, href } = props;
  return (
    <Link href={href}>
      <div className="w-12 h-12 rounded-xl bg-[#D71F26] flex items-center justify-center text-[#0D0808] text-3xl">
        <Icon className="icon-class" />
      </div>
    </Link>
  );
}
