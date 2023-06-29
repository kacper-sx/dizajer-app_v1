import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export type OfferProps = {
  title: string;
  desc: string;
  prize: string;
  prizeColor: string;
  variant: any;
  buttonTitle: string;
  list: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
};

export default function OneOffer(props: OfferProps) {
  const { title, desc, prize, variant, prizeColor, buttonTitle, list } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-1">
          <h1 className="text-5xl font-bold" style={{ color: prizeColor }}>
            {prize}
          </h1>
          <h3 className="text-sm mt-auto" style={{ color: prizeColor }}>
            + VAT
          </h3>
        </div>
        <Button variant={variant}> {buttonTitle} </Button>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-white font-extrabold">Pakiet zawiera</p>
        <ul className=" list-disc list-inside flex flex-col ml-2">
          <li className="text-sm text-white font-bold">{list.one}</li>

          <li className="text-sm text-white font-bold">{list.two}</li>

          <li className="text-sm text-white font-bold">{list.three}</li>

          <li className="text-sm text-white font-bold">{list.four}</li>
        </ul>
      </CardFooter>
    </Card>
  );
}
