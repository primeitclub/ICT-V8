import React from "react";
import { useNavigate } from "react-router-dom";
import team from "@/assets/events/teamwork.png";
import competitions from "@/assets/events/competitions.png";
import esports from "@/assets/events/Esports.png";
import musical from "@/assets/events/musical.png";
import job from "@/assets/events/job.png";
import robot from "@/assets/events/robo.png";
import panel from "@/assets/events/panel.png";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  bgColor?: string;
  link: string;
}

const allEvents: EventCardProps[] = [
  { title: "Sessions", description: "Engage with industry experts, learn the latest trends, and spark new ideas.", image: team, link: "/sessions" },
  { title: "Panel Discussion", description: "Join thought leaders as they discuss and debate the future of technology.", image: panel, link: "/panel-discussion" },
  { title: "Competitions", description: "Showcase your skills, compete with the best, and take home the prize.", image: competitions, link: "/competitions" },
  { title: "Esports", description: "Where Gamers Compete and Conquer!", image: esports, link: "/esports" },
  { title: "Musical Night", description: "An enchanting evening filled with live performances and great vibes!", image: musical, link: "/musical-night" },
  { title: "Job Fair", description: "Explore career opportunities and connect with top recruiters.", image: job, link: "/job-fair" },
];

const EventCard: React.FC<EventCardProps> = ({ title, description, image, bgColor, link }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(link);
  };

  return (
    <div
      className="p-4 sm:p-6 rounded-xl text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border-3 gap-5 border-gray-800 w-full h-75 flex flex-col items-center"
      style={{ backgroundColor: bgColor || "var(--card)", fontFamily: "Afacad" }}
    >
      <img src={image} alt={title} className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
      <h3 className="text-md sm:text-lg font-bold" style={{ color: "#FFFFFF" }}>{title}</h3>
      <p className="mt-1 text-xs sm:text-sm" style={{ color: "#E2BDBD" }}>{description}</p>
      <button
        className="mt-auto px-4 py-2 rounded-lg w-full transition-all"
        style={{ backgroundColor: "#3B76C3", color: "#FFFFFF" }}
        onClick={handleViewMore}
      >
        View More
      </button>
    </div>
  );
};

const EventSection: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-r from-[#001783] to-[#0086a7]">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            black 90%
          )`,
        }}
      />

      {/* Heading and Robot Image Section */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-8 px-4 sm:px-6">
        {/* Robot Image */}
        <div className="w-32 sm:w-48 md:w-60 mb-2 sm:mb-0 sm:mr-6 transform sm:translate-y-8">
          <img src={robot} alt="Robot Mascot" className="w-full" />
        </div>

        {/* Heading Section */}
        <div className="text-center sm:transform sm:translate-x-0 sm:translate-y-8">
          <h1 className="text-xl sm:text-3xl font-extrabold" style={{ color: "#FFFFFF" }}>What's Happening At ICT Meetup</h1>
          <p className="text-xs sm:text-md" style={{ color: "#E2BDBD" }}>
            Check Out Each Event, Learn More, And Join The Experience!
          </p>
        </div>
      </div>

      {/* Event Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-4 sm:px-6 mt-4 sm:mt-8">
        {/* All Event Cards */}
        {allEvents.map((event, index) => (
          <div key={index} className="w-full h-full">
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;