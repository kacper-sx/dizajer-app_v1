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
    <main className="min-h-screen flex bg-black">
      <div className="container bg-[#0D0808]">
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
