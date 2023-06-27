import { title } from "process";
import React from "react";
import { IconContext, IconType } from "react-icons";
import { FiMap, FiGrid, FiHeart } from "react-icons/fi";

export type CardItemsProps = {
  icon: IconType;
  title: string;
  descripion: string;
};

export default function OneService(props: CardItemsProps) {
  const { icon: Icon, title, descripion } = props;

  return (
    <div className="flex flex-col px-8 py-6 gap-6 rounded-2xl bg-gradient-to-r from-[#161213] via-[rgba(23,23,23,0)] border-[#261718] border-2 drop-shadow-lg">
      <div className="flex flex-col ">
        <div className="flex flex-row gap-4">
          <Icon
            className="icon-class"
            style={{ color: "red", fontSize: "38px" }}
          />
          <h2
            className="title-class"
            style={{ fontSize: "26px", fontWeight: "900" }}
          >
            {title}
          </h2>
        </div>
      </div>
      <p className="text-sm text-[#B0B0B0]">{descripion}</p>
    </div>
  );
}
