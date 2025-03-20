import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-12-04T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft: {
      days?: number;
      hours?: number;
      minutes?: number;
      seconds?: number;
    } = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0e0e1b] to-[#020617] flex flex-col items-center justify-center text-white px-4">
      {/* Background Glow */}
      <div className="absolute w-[2241.74px] h-[1038.69px] left-[196.81px] top-[-813.73px] 
        bg-gradient-to-br from-[rgba(39,84,122,0.6)] via-[rgba(39,84,122,0.6)] to-[rgba(15,118,166,0.6)] 
        blur-[136.6px] rotate-[15.4deg]">
      </div>

      {/* Title */}
      <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-afacad mb-4 z-10 text-center">
        ICT MEETUP V8.0
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl font-afacad text-center mb-4">
        "Fueling Ideas, Shaping the Future – Where Open Innovation Takes the Lead!"
      </p>

      {/* Register Button */}
      <button
        className="px-6 py-3 text-lg md:text-xl w-44 md:w-52 mt-2 text-white rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border-2 shadow-lg font-afacad flex items-center justify-center"
        style={{ backgroundColor: "#7409BC", borderColor: "#5A97E7" }}
      >
        Register Now
      </button>

      {/* Countdown Timer */}
      <div className="text-center mt-8">
        <h2 className="font-normal font-afacad text-xl md:text-2xl mb-6">
          COUNTDOWN
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-gray-800 p-4 md:p-6 w-24 md:w-28 lg:w-32 h-28 md:h-32 lg:h-36 rounded-2xl text-center"
            >
              <p className="font-medium font-afacad text-4xl md:text-5xl lg:text-[57.6px] leading-tight">
                {timeLeft[unit as keyof typeof timeLeft] || "00"}
              </p>
              <p className="text-sm md:text-base capitalize">{unit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute w-[1028px] h-[1028px] left-[-66px] top-[965px] 
        bg-[rgba(0,134,167,0.6)] blur-[334.45px]">
      </div>
    </div>
  );
};

export default Hero;
