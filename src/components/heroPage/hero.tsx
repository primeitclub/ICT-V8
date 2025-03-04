import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-04T00:00:00");
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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="font-bold text-9xl font-afacad mb-2 ">ICT MEETUP V8.0</h1>
      <p className=" text-xl mb-2 font-afacad">
        "Fueling Ideas, Shaping the Future – Where Open Innovation Takes the
        Lead!"
      </p>
      <button
        className="px-6 py-3 h-12 w-44 text-lg mt-1 text-white rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none border-2 shadow-lg font-afacad flex items-center justify-center "
        style={{ backgroundColor: "#7409BC", borderColor: "#5A97E7" }}
      >
        Register Now
      </button>

      <div className="text-center">
        <h2 className="font-normal font-afacad text-xl m-8 p-4">COUNTDOWN</h2>
        <div className="flex flex-wrap space-x-4">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-gray-800 p-6 w-32 h-36 rounded-[28.8px] text-center"
            >
              <p className="font-medium font-afacad text-[57.6px] leading-[76.8px]">
                {timeLeft[unit as keyof typeof timeLeft] || "00"}
              </p>
              <p className="text-sm capitalize">{unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
