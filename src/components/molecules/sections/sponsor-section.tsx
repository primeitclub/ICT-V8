import ict1 from "@/assets/ict-v7/1.png";
import ict2 from "@/assets/ict-v7/2.png";
import ict3 from "@/assets/ict-v7/3.png";
import ict4 from "@/assets/ict-v7/4.png";
import ict5 from "@/assets/ict-v7/5.png";
import Marquee from "@/components/ui/marquee";

interface Photo {
  name: string;
  img: string;
}

const photos: Photo[] = [
  {
    name: "ICT v7 images",
    img: ict1,
  },
  {
    name: "ICT v7 images",
    img: ict2,
  },
  {
    name: "ICT v7 images",
    img: ict3,
  },
  {
    name: "ICT v7 images",
    img: ict4,
  },
  {
    name: "ICT v7 images",
    img: ict5,
  },
  {
    name: "ICT v7 images",
    img: ict1,
  },
];

export default function SponsorSection() {
  const halfLength = Math.ceil(photos.length / 2);

  const firstHalf = photos.slice(0, halfLength);
  const secondHalf = photos.slice(halfLength);
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black max-w-screen">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0) 0%,
        black 30%
      )`,
        }}
      />

      <div className="relative z-10 mt-24">
        <div className="text-white text-2xl md:text-[64px] text-center font-bold font-afacad capitalize">
          Sponsor of the past
        </div>
        <div className="text-center text-[#e2dbdb] text-lg md:text-2xl mt-0 md:mt-4 font-normal font-afacad capitalize">
          A Look Back at Our Legacy
        </div>
        <div className="relative flex flex-col items-center justify-center h-full gap-4 mt-12 overflow-hidden">
          <div className="flex flex-row gap-4 ">
            <Marquee className=" justify-center overflow-hidden [--duration:12s] [--gap:2rem]">
              {firstHalf.map((data, idx) => (
                <img
                  key={idx}
                  src={data.img}
                  alt={data.name}
                  className="mx-auto h-[240px] md:h-[280px] cursor-pointer rounded-md"
                />
              ))}
            </Marquee>
          </div>
          <div className="flex flex-row gap-4">
            <Marquee
              className=" justify-center overflow-hidden [--duration:12s] [--gap:2rem]"
              style={{ transform: "scaleX(-1)" }}
            >
              {secondHalf.map((data, idx) => (
                <img
                  key={idx}
                  src={data.img}
                  alt={data.name}
                  className="mx-auto h-[240px] md:h-[280px] cursor-pointer rounded-md"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
