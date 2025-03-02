import { Link } from "react-router-dom";
import pitc from "@/assets/coming-soon/pitc.png";
import peaceMascot from "@/assets/peace_mascot.png";
import primeCollege from "@/assets/prime_college.png";
import { socialIcons, socialLinks } from "@/pages/coming-soon";
export default function Footer() {
  return (
    <div className="relative pt-20 overflow-hidden bg-black">
      <div className="blur-3xl"></div>
      <div className="absolute z-[0] top-[24rem] left-0 w-[400px] 2xl:w-[1200px] h-[800px] lg:w-[1000px] lg:h-[800px] bg-gradient-to-l from-[#002783] via-[#001783] to-[#001783] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute right-0 z-0 top-[16rem] w-[400px] h-[800px] 2xl:w-[1200px] lg:w-[1000px] lg:h-[800px] bg-gradient-to-r from-[#0086A7] via-cyan-500 to-[#002783] rounded-full blur-3xl opacity-40"></div>
      <div className="container relative mx-auto text-white">
        {/* Header Section */}
        <div className="grid content-between w-full grid-cols-1 gap-8 mb-12 text-center md:grid-cols-5 sm:text-left font-afacad">
          {/* Organizer */}
          <div className="grid justify-between grid-cols-2 col-span-3 gap-10 text-left h-fit md:col-span-2 md:gap-8 md:grid-cols-1">
            <div>
              <p className="text-md #fff text-left font-semibold">
                Organized by:
              </p>
              <div className="flex sm:block ">
                <a
                  href="https://primeitclub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={pitc}
                    className="object-contain w-32 h-16"
                    alt="PITC logo"
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="text-md #fff h-fit font-semibold text-left">
                Powered By:
              </p>
              <div className="flex sm:block">
                <a
                  href="https://prime.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={primeCollege}
                    className="object-contain w-32 h-16"
                    alt="Prime College logo"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid justify-between grid-cols-2 col-span-3 gap-10 text-left lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="space-y-4 text-md text-[#BCB9B9]">
                <li>
                  <Link to="#" className="hover:text-cyan-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-cyan-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-cyan-400">
                    ICT Cup
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-cyan-400">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-cyan-400">
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Location */}
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Contact Person</h3>
                <ul className="space-y-4 mt-3 text-md text-[#BCB9B9]">
                  <li>Sandesh Basnet(9843744896)</li>
                  <li>Niva Maharajan(9843744896)</li>
                  <li>Aditika Singh(9843744896)</li>
                  <li>Sujal Chitrakar(9843744896)</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Location</h3>
                <ul className="space-y-4 text-md text-[#BCB9B9]">
                  <li>Prime College</li>
                  <li>Khusibu, Nayabazar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-end w-full">
          <div className="text-white lg:text-[12.8rem] font-bold leading-none font-afacad sm:text-[8rem] text-[4rem] shadow-text ">
            {" "}
            ICT MEETUP
          </div>
          <div className="hidden md:block">
            <img
              src={peaceMascot}
              className="object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="pt-2 mt-3 mb-3 border-t-2 border-gray-400 lg:pt-4 font-hanken_grotesk">
          <div className="text-center lg:flex lg:justify-between lg:items-center">
            <p className="text-sm text-[#BCB9B9]">
              © 2024 Prime IT Club. All rights reserved
            </p>
            <div className="flex justify-center mt-2 space-x-4 md:mt-0">
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
        </div>
      </div>
    </div>
  );
}
