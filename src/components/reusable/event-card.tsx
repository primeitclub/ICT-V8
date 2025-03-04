import { Calendar, Clock, MapPin, MicVocal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  image: string;
  name: string;
  speaker: string;
  location: string;
  time: string;
  date: string;
}

export default function EventCard({
  image,
  name,
  speaker,
  location,
  time,
  date,
}: EventCardProps): JSX.Element {
  return (
    <div className="p-6">
      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-12">
        <img
          src={image}
          alt={name}
          className=" h-full w-52 object-cover rounded-xl"
        />
        <div className="text-white w-full">
          <h3 className="text-[26px] font-semibold font-afacad leading-10">
            {name}
          </h3>
          <div className="text-white text-base font-normal font-afacad leading-relaxed flex items-center gap-2 ">
            <MicVocal className="h-4" /> {speaker}
          </div>
          <div className="text-white text-base font-normal font-afacad leading-relaxed flex items-center gap-2 mt-2">
            <MapPin className="h-4" /> {location}
          </div>
          <div className="text-white text-base font-normal font-afacad leading-relaxed flex items-center gap-2 ">
            <Calendar className="h-4" /> {date}
          </div>
          <div className="text-white text-base font-normal font-afacad leading-relaxed flex items-center gap-2 ">
            <Clock className="h-4" /> {time}
          </div>
          <div className="w-full flex gap-6 mt-4">
            <Button className="w-1/2 bg-gradient-to-r from-[#2C6DEC] to-[#003CD5] text-white hover:scale-105 hover:shadow-white hover:shadow-sm transition-all duration-300 ease-linear">
              Register Now
            </Button>
            <Button className="w-1/2 bg-transparent border-[#2C6DEC] border-2 text-white hover:scale-105 hover:bg-transparent hover:shadow-sm hover:border-[#003CD5] transition-all duration-300 ease-linear">
              Read More
            </Button>
          </div>
        </div>
      </div>
      <div className="border-gray-500/60 border-[1px]" />
    </div>
  );
}
