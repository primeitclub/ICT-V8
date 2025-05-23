import { useState } from "react";
import { Navbar } from "@/components/global/landing-navbar";
import EventCard from "@/components/reusable/event-card";
import workshop from "@/assets/events/workshop.png";
import Footer from "@/components/global/footer";

interface TabItem {
  image: string;
  name: string;
  speaker: string;
  location: string;
  time: string;
  date: string;
  description?: string;
  highlights?: string[];
}

const eventsData: Record<string, TabItem[]> = {
  workshop: [
    {
      image: workshop,
      name: "Basic of Blockchain: How it works",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Are you ready to dive into the world of decentralized technology? Join us for Blockchain Revolution 101's an exclusive event that explores the transforming potential of blockchain technology.",
      highlights: [
        "Keynote Sessions: Gain insights from global blockchain pioneers and visionaries.",
        "Panel Discussions: Explore blockchain's impact on finance, supply chain, healthcare, and beyond.",
        "Hands-On Workshops: Learn to develop smart contracts and decentralized applications (dApps).",
        "Networking: Connect with like-minded professionals and forge lasting industry relationships.",
        "Pitch Competitions: Watch startups pitch groundbreaking ideas to investors and industry leaders.",
      ],
    },
    {
      image: workshop,
      name: "Freelancing: A beginner's guide",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Are you ready to dive into the world of decentralized technology? Join us for Blockchain Revolution 101's an exclusive event that explores the transforming potential of blockchain technology.",
      highlights: [
        "Keynote Sessions: Gain insights from global blockchain pioneers and visionaries.",
        "Panel Discussions: Explore blockchain's impact on finance, supply chain, healthcare, and beyond.",
        "Hands-On Workshops: Learn to develop smart contracts and decentralized applications (dApps).",
        "Networking: Connect with like-minded professionals and forge lasting industry relationships.",
        "Pitch Competitions: Watch startups pitch groundbreaking ideas to investors and industry leaders.",
      ],
    },
    {
      image: workshop,
      name: "Freelancing: A beginner's guide",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Are you ready to dive into the world of decentralized technology? Join us for Blockchain Revolution 101's an exclusive event that explores the transforming potential of blockchain technology.",
      highlights: [
        "Keynote Sessions: Gain insights from global blockchain pioneers and visionaries.",
        "Panel Discussions: Explore blockchain's impact on finance, supply chain, healthcare, and beyond.",
        "Hands-On Workshops: Learn to develop smart contracts and decentralized applications (dApps).",
        "Networking: Connect with like-minded professionals and forge lasting industry relationships.",
        "Pitch Competitions: Watch startups pitch groundbreaking ideas to investors and industry leaders.",
      ],
    },
  ],
  session: [
    {
      image: workshop,
      name: "Freelancing: A beginner's guide",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Are you ready to dive into the world of decentralized technology? Join us for Blockchain Revolution 101's an exclusive event that explores the transforming potential of blockchain technology.",
      highlights: [
        "Keynote Sessions: Gain insights from global blockchain pioneers and visionaries.",
        "Panel Discussions: Explore blockchain's impact on finance, supply chain, healthcare, and beyond.",
        "Hands-On Workshops: Learn to develop smart contracts and decentralized applications (dApps).",
        "Networking: Connect with like-minded professionals and forge lasting industry relationships.",
        "Pitch Competitions: Watch startups pitch groundbreaking ideas to investors and industry leaders.",
      ],
    },
    {
      image: workshop,
      name: "Freelancing: A beginner's guide",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Are you ready to dive into the world of decentralized technology? Join us for Blockchain Revolution 101's an exclusive event that explores the transforming potential of blockchain technology.",
      highlights: [
        "Keynote Sessions: Gain insights from global blockchain pioneers and visionaries.",
        "Panel Discussions: Explore blockchain's impact on finance, supply chain, healthcare, and beyond.",
        "Hands-On Workshops: Learn to develop smart contracts and decentralized applications (dApps).",
        "Networking: Connect with like-minded professionals and forge lasting industry relationships.",
        "Pitch Competitions: Watch startups pitch groundbreaking ideas to investors and industry leaders.",
      ],
    },
  ],
  competition: [
    {
      image: workshop,
      name: "Graphic Design Competition",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Join our expert panel as they discuss the promises and perils of artificial intelligence. This thought-provoking session explores how AI is both solving complex problems and creating new ethical dilemmas.",
      highlights: [
        "AI Ethics: Examining the moral implications of autonomous systems.",
        "Job Displacement: Understanding how automation affects employment landscapes.",
        "Privacy Concerns: Balancing data collection with individual rights.",
        "Regulatory Frameworks: Exploring governance approaches for AI technologies.",
        "Future Scenarios: Predicting how AI might shape society in coming decades.",
      ],
    },
    {
      image: workshop,
      name: "Freelancing: A beginner's guide",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Join our expert panel as they discuss the promises and perils of artificial intelligence. This thought-provoking session explores how AI is both solving complex problems and creating new ethical dilemmas.",
      highlights: [
        "AI Ethics: Examining the moral implications of autonomous systems.",
        "Job Displacement: Understanding how automation affects employment landscapes.",
        "Privacy Concerns: Balancing data collection with individual rights.",
        "Regulatory Frameworks: Exploring governance approaches for AI technologies.",
        "Future Scenarios: Predicting how AI might shape society in coming decades.",
      ],
    },
  ],
  panel: [
    {
      image: workshop,
      name: "Friend or Foe: Decoding AI's Dual nature",
      speaker: "Bibek Bhatta",
      location: "Seminar Hall, 3rd floor",
      time: "10:00 AM",
      date: "February 21, 2025",
      description:
        "Join our expert panel as they discuss the promises and perils of artificial intelligence. This thought-provoking session explores how AI is both solving complex problems and creating new ethical dilemmas.",
      highlights: [
        "AI Ethics: Examining the moral implications of autonomous systems.",
        "Job Displacement: Understanding how automation affects employment landscapes.",
        "Privacy Concerns: Balancing data collection with individual rights.",
        "Regulatory Frameworks: Exploring governance approaches for AI technologies.",
        "Future Scenarios: Predicting how AI might shape society in coming decades.",
      ],
    },
  ],
  esports: [
    {
      image: workshop,
      name: "Valorant",
      speaker: "John Smith",
      location: "Room B",
      time: "11:00 AM",
      date: "2024-12-21",
      description:
        "Join our expert panel as they discuss the promises and perils of artificial intelligence. This thought-provoking session explores how AI is both solving complex problems and creating new ethical dilemmas.",
      highlights: [
        "AI Ethics: Examining the moral implications of autonomous systems.",
        "Job Displacement: Understanding how automation affects employment landscapes.",
        "Privacy Concerns: Balancing data collection with individual rights.",
        "Regulatory Frameworks: Exploring governance approaches for AI technologies.",
        "Future Scenarios: Predicting how AI might shape society in coming decades.",
      ],
    },
  ],
};

export default function EventsPage(): JSX.Element {
  const [activeTab, setActiveTab] =
    useState<keyof typeof eventsData>("workshop");

  return (
    <>
      {" "}
      <Navbar />
      <div className="relative min-h-screen bg-black  pb-12">
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="w-full h-full rounded-full bg-gradient-to-bl  to-[#00a79f] from-[#001783] opacity-40 blur-3xl mt-36 z-10"></div>
          <div className="absolute right-0 top-12 w-[400px]  lg:w-[1200px] lg:h-[800px] bg-gradient-to-r from-[#00a79f] via-[#001783] to-[#001783] rounded-full blur-3xl opacity-40 blur-[240px] z-10"></div>
        </div>
        <div className="container relative mt-16 z-10 flex flex-col items-center  min-h-screen ">
          <div className="text-center mt-2 text-white text-[56px] font-semibold font-afacad capitalize leading-[86px]">
            Events
          </div>
          <div className="text-center text-[#e2dbdb] text-xl font-normal font-afacad capitalize">
            Check out each event, learn more, and join the experience!
          </div>

          <div className="flex flex-wrap justify-center mt-8 gap-8 ">
            {["workshop", "session", "competition", "panel", "esports"].map(
              (tab, index, array) => (
                <div className="flex items-center gap-8" key={tab}>
                  <button
                    onClick={() => setActiveTab(tab as keyof typeof eventsData)}
                    className={`text-center  text-lg font-normal font-afacad leading-10 ${
                      activeTab === tab
                        ? "text-white border-b-2 border-[#F15B2D]"
                        : "text-[#bdbdbd]/60 border-b-2 border-transparent hover:text-white"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                  {index < array.length - 1 && (
                    <div className="h-5 w-px bg-[#617292]" />
                  )}
                </div>
              )
            )}
          </div>

          <div className="mt-8 px-4 w-full lg:w-[900px] pt-8 bg-white/5 backdrop-blur-lg rounded-2xl">
            {eventsData[activeTab].map((event, index) => (
              <EventCard
                key={index}
                image={event.image}
                name={event.name}
                speaker={event.speaker}
                location={event.location}
                time={event.time}
                date={event.date}
                description={event.description}
                highlights={event.highlights}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
