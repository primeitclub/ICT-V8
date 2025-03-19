"use client";

import { Calendar, Clock, MapPin, MicVocal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    image: string;
    name: string;
    speaker: string;
    location: string;
    time: string;
    date: string;
    description?: string;
    highlights?: string[];
  };
}

export default function EventModal({
  isOpen,
  onClose,
  event,
}: EventModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black w-screen h-screen opacity-80 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0 relative z-10 ">
        <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#111827] overflow-auto rounded-md  scrollbar-none">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <div className="relative h-80 overflow-hidden">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full h-full  ">
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="p-6 text-white">
            <h1 className="text-2xl text-start font-bold mb-2">{event.name}</h1>

            <div className="flex flex-col gap-1 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">
                  {" "}
                  <MicVocal className="h-4" />
                </span>{" "}
                {event.speaker}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">
                  {" "}
                  <MapPin className="h-4" />{" "}
                </span>{" "}
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">
                  {" "}
                  <Calendar className="h-4" />{" "}
                </span>{" "}
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">
                  {" "}
                  <Clock className="h-4" />
                </span>{" "}
                {event.time}
              </div>
            </div>

            <p className="text-white/90 text-justify mb-6">
              {event.description ||
                "Are you ready to dive into the world of decentralized technology? Join us for Blockchain Revolution 101's an exclusive event that explores the transforming potential of blockchain technology. Event highlights:"}
            </p>
            <p className="text-white/90 text-justify">Event highlights:</p>

            <ul className="list-disc pl-6 mb-8 space-y-2 text-justify">
              {(
                event.highlights || [
                  "Keynote Sessions: Gain insights from global blockchain pioneers and visionaries.",
                  "Panel Discussions: Explore blockchain's impact on finance, supply chain, healthcare, and beyond.",
                  "Hands-On Workshops: Learn to develop smart contracts and decentralized applications (dApps).",
                  "Networking: Connect with like-minded professionals and forge lasting industry relationships.",
                  "Pitch Competitions: Watch startups pitch groundbreaking ideas to investors and industry leaders.",
                ]
              ).map((highlight, index) => (
                <li key={index} className="text-white/80">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <Button className="w-full max-w-xs bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white hover:opacity-90 transition-opacity">
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
