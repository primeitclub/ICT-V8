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
import ln from "@/assets/Coming-Soon/ln.png";
import yt from "@/assets/Coming-Soon/yt.png";
import tt from "@/assets/Coming-Soon/tiktok.png";
import mobile from "@/assets/Coming-Soon/mobile-bg.png";
import mblur from "@/assets/Coming-Soon/mobile-blur.png";

const socialIcons = [fb, tw, ig, ln, yt, tt];
const socialLinks = [
  "https://www.facebook.com/primeitclub",
  "https://x.com/_primeitclub",
  "https://instagram.com/primeitclub",
  "https://linkedin.com/company/prime-it-club",
  "https://www.youtube.com/@primeitclub",
  "https://www.tiktok.com/@primeitclub",
];

export default function ComingSoon(): JSX.Element {
  return (
    <BackgroundBeamsWithCollision>
      <div
        className="flex flex-col items-center  min-h-screen w-full text-black overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${window.innerWidth >= 768 ? bg : mobile})`,
        }}
      >
        {" "}
        <div className="w-full flex justify-between mt-0 md:absolute overflow-hidden z-40">
          <img src={ict} className=" m-8 h-10 object-contain" alt="ICT logo" />
          <div className="h-10 w-20 m-8">
            {" "}
            <a
              href="https://primeitclub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pitc}
                className="w-full h-full object-contain"
                alt="PITC logo"
              />
            </a>
          </div>{" "}
        </div>
        <div className="absolute h-full flex items-center md:items-stretch md:p-6 z-10 object-contain -mt-16 md:mt-0">
          <img src={mascot} alt="Mascot" />
        </div>
        <img
          src={blurbg}
          className="absolute hidden md:flex h-full items-center justify-center z-10 p-24 mt-12 object-cover"
          alt="Blur Background"
        />
        <div className="absolute md:hidden h-full z-10 -mt-12 flex items-center justify-center object-cover opacity-100">
          {" "}
          <img src={mblur} alt="Blur Background" />
        </div>
        <div className="absolute flex flex-col h-screen z-20 justify-center items-center gap-0">
          <div className="text-white text-[56px] leading-25 md:text-[82px] 2xl:text-9xl font-bold font-afacad uppercase text-center -mt-16 md:mt-24">
            coming soon
          </div>
          <div className="text-[#e8dddd] text-[16px] md:text-[20px] 2xl:text-[24px] font-normal font-afacad text-center -mt-4">
            Mark your calendar—ICT Meetup v8.0 is coming.
          </div>
        </div>
        <div className="absolute hidden md:flex bottom-2 w-full">
          <img
            src={bgText}
            className="w-full object-cover"
            alt="Background Text"
          />
        </div>
        <div className="absolute h-1/4  flex-col-reverse md:flex-row flex gap-24 w-full px-12 justify-between items-center z-20 bottom-8">
          <div>
            <div className="text-[#e8e8e8] text-lg md:text-md font-normal font-afacad">
              Stay Connected, Stay Updated!
            </div>
            <div className="flex gap-4 mt-2 justify-center">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={socialLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-4 h-4"
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
            className="text-[#e8e8e8]  text-lg md:text-sm font-normal font-afacad px-4 py-2 bg-gray-200/20 hover:bg-gradient-to-r hover:from-[#4864e5]/50 hover:to-[#7408bb]/50 border-[#5a93ed]/50 hover:border-[1px] transition-all duration-600 hover:scale-105 ease-in-out rounded-[4px]"
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
