import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation/index";
import Footer from "@/components/footer/footer";
import Services from "@/components/services/services";
import Map from "@/components/map/map";
import PriceList from "@/components/pricelist/pricelist";
import Central from "@/components/central/central";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black gap-4 w-full justify-center items-center">
      <div className="max-w-[1440px] min-h-screen flex flex-col gap-4 bg-[#0D0808]">
        <Navigation />
        <Central />
        <Services />
        <Map />
        <PriceList />
        <Footer />
      </div>
    </main>
  );
}
