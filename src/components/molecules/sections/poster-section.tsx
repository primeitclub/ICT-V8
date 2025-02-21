import cute_robo from "@/assets/cute_robo.png";
import v7poster from "@/assets/v7poster.png";

export default function PosterSection() {
  return (
    <div className="relative  min-h-screen overflow-x-hidden  bg-black">
      <div
        className="absolute inset-0 blur-3xl md:rounded-2xl z-0"
        style={{
          background: `linear-gradient(
            to top,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 23, 131, 0.5) 100%
          )`,
        }}
      />{" "}
      <div className="flex absolute inset-0 z-0">
        <div className="w-[540px] h-[540px] md:rounded-[70%] bg-[#0086a7]  opacity-40 blur-3xl z-10"></div>
        <div className="w-1/2 mt-4 h-[600px] bg-[#17407D] opacity-50 blur-3xl z-10"></div>
      </div>
      <div className="container relative flex flex-col items-center justify-center min-h-screen mt-12">
        <div className="relative z-10">
          <img src={cute_robo} className="h-40 md:h-80" alt="Cute Robot" />
        </div>

        <div className="relative z-20 -mt-20 md:-mt-40">
          <img src={v7poster} alt="Poster" className="md:w-[900px]" />
        </div>
        <div className="w-full md:w-[800px] mt-4 z-20 text-center text-white text-[20px] font-normal font-afacad leading-[34px]">
          ICT Meetup v8.0 is a premier event focused on Open Innovation,
          bringing together IT leaders, enthusiasts, and innovators for two days
          of insightful sessions, panel discussions, and exciting competitions.
          This year's gathering encourages collaboration and breaking down
          barriers to tackle tech challenges.
        </div>
      </div>
    </div>
  );
}
