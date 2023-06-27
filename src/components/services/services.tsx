import { FiMap, FiGrid, FiHeart } from "react-icons/fi";

import OneService, { CardItemsProps } from "./OneService";

const appServices: CardItemsProps[] = [
  {
    icon: FiMap,
    title: "Lokalizacja",
    descripion:
      "Zespół z miasta musztardy, keczupu i religijnie inspirujących drzew",
  },
  {
    icon: FiGrid,
    title: "Wirtuozeria",
    descripion:
      "Zespół gra tak nieczysto i nierówno, że nawet stary wraca z mlekiem... ",
  },
  {
    icon: FiHeart,
    title: "Humor",
    descripion:
      "Zespół słynie z takiej satyry, że z koncertu bezdomni uciekają na chatę...",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col px-8 py-8 justify-center gap-4">
      <div className="flex flex-col px-4 pt-16 pb-4 items-center">
        <p className="text-[#F1D302] text-sm pb-2 ">
          postrzeleni, nieprofesjonali i głośni
        </p>
        <h1 className="text-white text-6xl font-heading">
          Ale to nie koniec naszych zalet!
        </h1>
      </div>
      <div className="flex flex-row py-4 px-24, gap-16 text-white mx-24">
        {appServices.map((d) => (
          <OneService {...d} key={d.title} />
        ))}
      </div>
    </div>
  );
}
