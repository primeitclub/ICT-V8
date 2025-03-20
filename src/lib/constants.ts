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

export const scheduleData: ScheduleData = {
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