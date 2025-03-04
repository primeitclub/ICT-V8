import Timeline from "@/components/ui/timeline";
import sponsors from "@/assets/sponsors/sponsor.png";
import title from "@/assets/sponsors/title.png";

export default function SponsorSection() {
  const data = [
    {
      title: "Title Sponsor",
      content: (
        <div>
          <div className="">
            <img src={title} alt="sponsor logo" />
          </div>
        </div>
      ),
    },
    {
      title: "Platinum Sponsor",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img src={sponsors} alt="sponsor logo" />
            <img src={sponsors} alt="sponsor logo" />
          </div>
        </div>
      ),
    },
    {
      title: "Gold Sponsor",
      content: (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src={title} alt="sponsor logo" />
            <img src={sponsors} alt="sponsor logo" />
            <img src={sponsors} alt="sponsor logo" />
          </div>
        </div>
      ),
    },
    {
      title: "Silver Sponsor",
      content: (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src={sponsors} alt="sponsor logo" />
            <img src={sponsors} alt="sponsor logo" />
            <img src={sponsors} alt="sponsor logo" />
            <img src={sponsors} alt="sponsor logo" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black max-w-screen ">
      <div className="absolute top-10 left-0 w-[1000px] h-[1000px] bg-[#0086a7] rounded-full blur-3xl opacity-50 z-10 "></div>
      <div className="absolute bottom-10 right-0 w-[1000px] h-[1000px] bg-[#001783] rounded-full blur-3xl opacity-50 z-10 "></div>
      <div className="relative z-10 mt-24">
        <div className="text-center">
          <span className="text-white text-5xl font-bold font-afacard uppercase leading-[64px]">
            OUR SPONSORS
          </span>
          <span className="text-[#e75f27] text-5xl font-bold font-afacard uppercase leading-[64px]">
            .
          </span>
        </div>

        <div className="relative flex flex-col items-center justify-center h-full gap-4 overflow-hidden my-4 md:px-24">
          <Timeline data={data} />
        </div>
      </div>
    </div>
  );
}
