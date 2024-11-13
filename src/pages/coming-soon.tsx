import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ict from "@/assets/Coming-Soon/ict.png";
import pitc from "@/assets/Coming-Soon/pitc.png";
import bgText from "@/assets/Coming-Soon/bg-text.png";
import gradient from "@/assets/Coming-Soon/gradient-bg.png";
import mascot from "@/assets/Coming-Soon/mascot.png";
import blurbg from "@/assets/Coming-Soon/blurbg.png";
import bg from "@/assets/Coming-Soon/bg.png";
import fb from "@/assets/Coming-Soon/fb.png";
import tw from "@/assets/Coming-Soon/twitter.png";
import ig from "@/assets/Coming-Soon/ig.png";
import tt from "@/assets/Coming-Soon/tiktok.png";
import yt from "@/assets/Coming-Soon/yt.png";

const socialIcons = [fb, tw, ig, tt, yt];
const socialLinks = [
  "https://facebook.com",
  "https://twitter.com",
  "https://instagram.com",
  "https://twitter.com",
  "https://instagram.com",
];

export default function ComingSoon(): JSX.Element {
  return (
    <BackgroundBeamsWithCollision>
      <div
        className="flex flex-col items-center min-h-screen bg-cover bg-center bg-no-repeat w-full text-black overflow-hidden"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full flex justify-between md:absolute overflow-hidden">
          <img src={ict} className="m-8 h-10 object-contain" alt="ICT logo" />
          <img src={pitc} className="m-8 h-10 object-contain" alt="PITC logo" />
        </div>{" "}
        <img
          src={mascot}
          className="absolute max-h-full p-6 z-10 object-contain"
          alt="Mascot"
        />
        <img
          src={blurbg}
          className="absolute h-full items-center justify-center z-10 p-24 mt-12 object-cover"
          alt="Blur Background"
        />
        <div className="flex flex-col h-screen z-20 justify-center items-center">
          <div className="text-white text-5xl md:text-[82px] 2xl:text-8xl font-bold font-afacad uppercase text-center mt-24">
            coming soon
          </div>
          <div className="text-[#e8dddd] text-xs md:text-[18px] font-medium font-afacad text-center">
            Mark your calendar—ICT Meetup v8.0 is coming.
          </div>
        </div>
        <div className="absolute bottom-2 w-full">
          <img
            src={bgText}
            className="w-full object-cover"
            alt="Background Text"
          />
        </div>
        <div className="absolute inline-flex w-full px-12 justify-between items-center z-20 bottom-4">
          <div>
            <div className="text-[#e8e8e8] text-sm font-normal font-afacad">
              Stay Connected, Stay Updated!
            </div>
            <div className="flex gap-2 mt-2 justify-center">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={socialLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-5 h-5"
                    src={icon}
                    alt={`Social Icon ${index + 1}`}
                  />
                </a>
              ))}
            </div>
          </div>
          <a
            href="https://ictv7.primeitclub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8e8e8] text-sm font-normal font-afacad px-4 py-2 bg-gray-200/20"
          >
            Visit Last Year's ICT
          </a>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <img
            src={gradient}
            className="w-full object-cover"
            alt="Gradient Background"
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
