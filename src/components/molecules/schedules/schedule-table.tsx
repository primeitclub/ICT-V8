import React, { useState } from "react";

interface ScheduleItem {
      time: string;
      activities: Array<{
            title: string;
            location: string;
      }>;
}

const scheduleData: ScheduleItem[] = [
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
                        title: "Networking Session",
                        location: "Lobby",
                  },
            ],
      },
];

export default function ScheduleTable() {
      const [showSchedule, setShowSchedule] = useState("day1");

      const handleSchedule = (value: string) => {
            setShowSchedule(value);
      };

      return (
            <div className="w-full max-w-4xl mx-auto">
                  <h2 className="text-white text-center font-bold text-4xl leading-normal font-afacad">
                        Schedule
                  </h2>
                  <div className="flex justify-center space-x-3 text-sm my-4 font-hanken_grotesk">
                        <button
                              className={`rounded-[12px] border border-[#1D9CA5]  px-3 py-2 ${showSchedule === "day1" ? "bg-gradient-to-r from-[#032D63] to-[#075BC9]" : "border border-[#919393] bg-[rgba(120,122,125,0.31)]"
                                    }`}
                              onClick={() => handleSchedule("day1")}
                        >
                              Day 1 (7th Jan)
                        </button>
                        <button
                              className={`rounded-[12px] border border-[#1D9CA5]  px-3 py-2 ${showSchedule === "day2" ? "bg-gradient-to-r from-[#032D63] to-[#075BC9]" : "border border-[#919393] bg-[rgba(120,122,125,0.31)]"
                                    }`}
                              onClick={() => handleSchedule("day2")}
                        >
                              Day 2 (8th Jan)
                        </button>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-teal-800 via-blue-900 to-purple-900 rounded-3xl opacity-95">
                        <div className="grid grid-cols-[200px,1fr] font-hanken_grotesk">
                              <div className="text-[#CCE9FF] font-semibold border-[#888282] border-b p-4 border-r text-center text-md">Time</div>
                              <div className="text-[#CCE9FF] font-semibold border-[#888282] border-b p-4 text-md">Activities</div>

                              {showSchedule === "day1" &&
                                    scheduleData.map((item, index) => (
                                          <React.Fragment key={index}>
                                                <div className="text-sm border-r border-[#888282] text-[#C6E7FF]  text-[24px] leading-[150%] p-4 flex justify-center items-center">
                                                      {item.time}
                                                </div>
                                                <div
                                                      className={`grid gap-4 pt-4 px-3 ${`grid-cols-${item.activities.length}` || "grid-cols-1"
                                                            }`}
                                                >
                                                      {item.activities.map((activity, activityIndex) => (
                                                            <div
                                                                  key={activityIndex}
                                                                  className="bg-blue-950/50 p-3 backdrop-blur-sm rounded-xl"
                                                            >
                                                                  <h3 className="text-white font-medium mb-1 text-sm">
                                                                        {activity.title}
                                                                  </h3>
                                                                  <p className="text-white text-xs">{activity.location}</p>
                                                            </div>
                                                      ))}
                                                </div>
                                          </React.Fragment>
                                    ))}

                        </div>
                  </div>
            </div >
      );
}
