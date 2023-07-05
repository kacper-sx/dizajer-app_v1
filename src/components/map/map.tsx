import Image from "next/image";

export default function Map() {
  return (
    <div className="flex px-32 sm:px-8 py-16 sm:py-4 justify-center ">
      <div className="flex flex-row px-8 py-6 bg-gradient-to-br md:px-4 sm:px-2 gap-32 md:gap-0 sm:gap-0 md:flex-col sm:flex-col from-[#161213] via-[#17171700] border-[#261718] border-2 rounded-3xl sm:items-center md:items-center">
        <div className="flex flex-col gap-2 px-3 py-3 md:text-center sm:text-center">
          <h1 className="font-heading text-white text-6xl font-normal">
            Jesteśmy stąd
          </h1>
          <p className="text-white text-xl font-normal">i tu nam się opłaca</p>
          <p className="text-white text-xl font-normal">jeździć.</p>

          <div className="h-32 lg:h-0 md:h-0 sm:h-0"></div>
          <div>
            <p className="text-[#F1D302] text-sm font-medium ">
              a dokładnie z Parczewa, które lokalni artyści opisują tak:
            </p>
          </div>
          <div className="justify-end">
            <p className="text-white text-2xl font-normal">
              W miasteczku niewielkim, spokojnym gdzie
            </p>
            <p className="text-white text-2xl font-normal">
              nurt Konotopy w dal cicho mknie...
            </p>
          </div>
        </div>
        <div className="flex justify-self-end">
          <Image alt="home" src="/pl.svg" width={421} height={400} />
        </div>
      </div>
    </div>
  );
}
