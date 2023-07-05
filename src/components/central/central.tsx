import Image from "next/image";
import { Button } from "../ui/button";
import "./styles.css";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Central() {
  return (
    <div className="relative mx-auto">
      <div className="relative z-10">
        <div className="sm:hidden" id="elipse1"></div>
        <div className="sm:hidden" id="elipse2"></div>
        <div className="sm:hidden md:hidden" id="elipse3"></div>
        <div className="sm:hidden md:hidden" id="elipse4"></div>
        <div className="sm:hidden md:hidden" id="elipse5"></div>
        <div className="sm:hidden md:hidden" id="vector">
          <svg
            width="651"
            height="220"
            viewBox="0 0 651 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M619.956 0.828735L298.721 220H452.44L650 124.825L619.956 0.828735ZM619.956 0.828735L111.045 220H0L619.956 0.828735Z"
              stroke="url(#paint0_linear_23_7)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_23_7"
                x1="592.394"
                y1="-1.00012"
                x2="592.394"
                y2="220"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D71F26" />
                <stop offset="1" stop-color="#F1D302" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          id="bg"
          className="flex flex-col bg-[#0D0808] sm:px-8 md:px-24 md:items-center px-[162px] gap-14 z-20 sm:items-center"
        >
          <Image
            id="image"
            src="/logod.png"
            alt="logo"
            width={750}
            height={240}
            className="flex self-center mt-36 md:mt-14 sm:mt-14"
          />
          <div className="flex flex-col gap-4 sm:gap-2">
            <h1
              id="n1"
              className="font-heading self-start md:text-center sm:text-center sm:text-4xl text-6xl font-extrabold text-white"
            >
              MOŻE NIE RÓWNO ZA TO NIE CZYSTO!
            </h1>
            <h3
              className="text-[#F1D302] md:text-center xl:self-start lg:self-start sm:text-center sm:text-lg text-3xl font-extrabold"
              id="n2"
            >
              czyli najlepszy zespół po tej stronie Piwonii
            </h3>
          </div>
          <div className="flex flex-col">
            <Button className="self-end" variant={"desireCall"} size={"xl"}>
              Call me maybe!
            </Button>
          </div>
          <AiOutlineArrowDown className="text-[#F1D302] self-center w-16 h-24 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
