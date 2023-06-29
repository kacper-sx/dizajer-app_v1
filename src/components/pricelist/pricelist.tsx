import OneOffer, { OfferProps } from "./OneOffer";

const appCard: OfferProps[] = [
  {
    title: "LITE",
    desc: "promujcie się",
    prize: "0$",
    prizeColor: "#61E294",
    variant: "desireGr",
    buttonTitle: "Z tym to powoli może...",
    list: {
      one: "Kulkura osobista zespołu",
      two: "Brak metronomu",
      three: "Nierówna i nieczysta gra",
      four: "Kiepskie żarty sceniczne",
    },
  },
  {
    title: "PRO",
    desc: "gminny festiwal ogórka",
    prize: "100$",
    prizeColor: "#F1D302",
    variant: "desireYl",
    buttonTitle: "Na to my są chętni",
    list: {
      one: "Duża kulkura osobista zespołu",
      two: "Piosenki na czasie",
      three: "Nierówna i nieczysta gra",
      four: "Średnie żarty sceniczne",
    },
  },
  {
    title: "ULTIMATE",
    desc: "Dizajer gwiazdą wydarzenia",
    prize: "650$",
    prizeColor: "#D71F26",
    variant: "desireRd",
    buttonTitle: "Panie dzwoń pan nie pytaj!",
    list: {
      one: "Do rany przyłóż zespół",
      two: "Hity co Woodstockiem trzęsły",
      three: "Nierówna i nieczysta gra",
      four: "Świetne żarty sceniczne",
    },
  },
];

export default function PriceList() {
  return (
    <div className="flex flex-col px-16 py-16 gap-16">
      <div className="flex flex-col items-center">
        <h1 className="font-heading text-white text-6xl">Cennik</h1>
        <p className="text-[#F1D302] text-sm">
          Znamy swoją wartość i wiemy, że jest niewielka
        </p>
      </div>
      <div className="flex flex-row justify-around">
        {appCard.map((d) => (
          <OneOffer {...d} key={null} />
        ))}
      </div>
    </div>
  );
}
