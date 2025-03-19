import React, { useState } from "react";

interface ScheduleItem {
      time: string;
      activities: Array<{
            title: string;
            location: string;
      }>;
}

interface ScheduleData {
      day1: ScheduleItem[];
      day2: ScheduleItem[];
}

const scheduleData: ScheduleData = {
      day1: [
            {
                  time: "8:00 - 9:00 AM",
                  activities: [
                        {
                              title: "Registration and check-in",
                              location: "Register Desk",
                        },
                  ],
            },
            {
                  time: "9:00 - 10:00 AM",
                  activities: [
                        {
                              title: "Opening Ceremony",
                              location: "Main Hall",
                        },
                  ],
            },
            {
                  time: "10:00 - 11:00 AM",
                  activities: [
                        {
                              title: "Keynote Speech",
                              location: "Conference Room A",
                        },
                        {
                              title: "Networking Session",
                              location: "Lobby",
                        },
                        {
                              title: "Refreshments and snacks",
                              location: "Break Area",
                        },
                  ],
            },
            {
                  time: "8:00 - 9:00 AM",
                  activities: [
                        {
                              title: "Registration and check-in",
                              location: "Register Desk",
                        },
                  ],
            },
            {
                  time: "9:00 - 10:00 AM",
                  activities: [
                        {
                              title: "Opening Ceremony",
                              location: "Main Hall",
                        },
                  ],
            },
            {
                  time: "10:00 - 11:00 AM",
                  activities: [
                        {
                              title: "Keynote Speech",
                              location: "Conference Room A",
                        },
                        {
                              title: "Networking Session",
                              location: "Lobby",
                        },
                        {
                              title: "Refreshments and snacks",
                              location: "Break Area",
                        },
                  ],
            },
      ],
      day2: [
            {
                  time: "8:00 - 9:00 AM",
                  activities: [
                        {
                              title: "Registration and check-in",
                              location: "Register Desk",
                        },
                  ],
            },
            {
                  time: "9:00 - 10:00 AM",
                  activities: [
                        {
                              title: "Workshop A",
                              location: "Room 101",
                        },
                        {
                              title: "Workshop B",
                              location: "Room 102",
                        },
                  ],
            },
            {
                  time: "8:00 - 9:00 AM",
                  activities: [
                        {
                              title: "Registration and check-in",
                              location: "Register Desk",
                        },
                  ],
            },
            {
                  time: "9:00 - 10:00 AM",
                  activities: [
                        {
                              title: "Opening Ceremony",
                              location: "Main Hall",
                        },
                  ],
            },
            {
                  time: "10:00 - 11:00 AM",
                  activities: [
                        {
                              title: "Keynote Speech",
                              location: "Conference Room A",
                        },
                        {
                              title: "Networking Session",
                              location: "Lobby",
                        },
                        {
                              title: "Refreshments and snacks",
                              location: "Break Area",
                        },
                  ],
            },
      ],
};

export default function ScheduleTable() {
      const [showSchedule, setShowSchedule] = useState("day1");

      const handleSchedule = (value: string) => {
            setShowSchedule(value);
      };

      const getGridColsClass = (count: number) => {
            switch (count) {
                  case 1:
                        return "grid-cols-1";
                  case 2:
                        return "grid-cols-2";
                  case 3:
                        return "grid-cols-3";
                  case 4:
                        return "grid-cols-4";
                  default:
                        return "grid-cols-1";
            }
      };

      const currentSchedule = showSchedule === "day1" ? scheduleData.day1 : scheduleData.day2;

      return (
            <div className="relative py-20 3xl:max-w-[2400px] text-white bg-black font-afacad">
                  <div className="blur-3xl">
                        <div className="absolute -z-1 top-[150px] w-[400px] h-[500px]  lg:w-[1200px] lg:h-[500px] bg-gradient-to-r from-[#0086A7] via-cyan-500 to-[#002783] rounded-full blur-3xl opacity-40"></div>
                        <div className="absolute -z-10 top-[120px] right-0 w-[400px] h-[500px] lg:w-[1200px] lg:h-[550px] bg-gradient-to-r from-[#002783] via-[#001783] to-[#001783] rounded-full blur-3xl opacity-60"></div>
                  </div>
                  <div className="container mx-auto">
                        <h2 className="text-white text-4xl md:text-[64px] text-center font-bold font-afacad capitalize md:pb-6">
                              Schedule
                        </h2>
                        <div className="flex justify-center space-x-3 md:text-[1.1rem] text-[#fff] my-6 font-hanken_grotesk font-bold pb-6">
                              <button
                                    className={`rounded-[12px] border border-[#1D9CA5] px-6 py-2 ${showSchedule === "day1"
                                          ? " bg-gradient-to-r from-[#032D63] to-[#051B37]"
                                          : "border border-[#919393] bg-[rgba(120,122,125,0.31)]"
                                          }`}
                                    onClick={() => handleSchedule("day1")}
                              >
                                    Day 1 (7th Jan)
                              </button>
                              <button
                                    className={`rounded-[12px] border border-[#1D9CA5] px-6 py-2 ${showSchedule === "day2"
                                          ? "bg-gradient-to-r from-[#032D63] to-[#051B37]"
                                          : "border border-[#919393] bg-[rgba(120,122,125,0.31)]"
                                          }`}
                                    onClick={() => handleSchedule("day2")}
                              >
                                    Day 2 (8th Jan)
                              </button>
                        </div>
                        <div className="overflow-x-auto">
                              <div className="p-6 bg-white backdrop-blur-lg bg-opacity-5 rounded-3xl " style={{ minWidth: "650px" }}>
                                    <div className="grid grid-cols-[200px,1fr] font-hanken_grotesk">
                                          <div className="text-[#CCE9FF] md:text-[1.1rem] font-semibold border-[#888282] border-b p-4 border-r text-center text-md">Time</div>
                                          <div className="text-[#CCE9FF] md:text-[1.1rem] font-semibold border-[#888282] border-b p-4 text-md">Activities</div>

                                          {currentSchedule.map((item, index) => (
                                                <React.Fragment key={index}>
                                                      <div className=" border-r border-[#888282] text-[#C6E7FF] md:text-[1.1rem] leading-[150%] p-4 flex justify-center items-center ">
                                                            {item.time}
                                                      </div>
                                                      <div className={`grid gap-2 pt-2 px-3 py-2  ${getGridColsClass(item.activities.length)}`}>
                                                            {item.activities.map((activity, activityIndex) => (
                                                                  <div
                                                                        key={activityIndex}
                                                                        className="bg-blue-950/50 p-3 backdrop-blur-sm rounded-xl"
                                                                  >
                                                                        <h3 className="text-white font-medium mb-1 md:text-[1.1rem] ">
                                                                              {activity.title}
                                                                        </h3>
                                                                        <p className="text-white text-sm">{activity.location}</p>
                                                                  </div>
                                                            ))}
                                                      </div>
                                                </React.Fragment>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}