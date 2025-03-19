import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import robot from "@/assets/FAQ/robot.png";
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "1. What is ICT Meetup v8.0?",
    answer:
      'ICT Meetup v8.0 is an annual gathering for IT professionals, students, and tech enthusiasts to explore innovations, network, and participate in engaging activities such as sessions, panel discussions, and competitions. This year we\'re focusing on "Open Innovation" as our theme to encourage collaboration and knowledge sharing across the tech industry.',
  },
  {
    question: "2. When and where is the event taking place?",
    answer:
      "The event will be held at the Main Conference Center on December 15-16, 2024. Sessions run from 9 AM to 5 PM each day.",
  },
  {
    question: "3. Who can attend the ICT Meetup?",
    answer:
      "The event is open to all IT professionals, students, developers, and tech enthusiasts. Whether you're a beginner or an expert, there's something for everyone.",
  },
  {
    question: "4. How do I register for the event?",
    answer:
      "Registration can be completed through our online portal. Early bird registration is available until November 1st with special discounts.",
  },
  {
    question: "5. What is the ICT Cup, and how can I participate?",
    answer:
      "The ICT Cup is our annual coding competition. Teams of 3-4 members can register separately for this event. Details and registration will be available one month before the event.",
  },
  {
    question: " 6. Are there any fees to attend?",
    answer:
      "Yes, there is a nominal fee to cover event costs. Students receive a 50% discount with valid ID. Early bird registrants get an additional 20% off.",
  },
  {
    question: "7. Can I register for individual sessions or activities?",
    answer:
      "Yes, you can register for individual sessions. However, full event registration provides the best value and networking opportunities.",
  },
  {
    question: "8. Will there be networking opportunities?",
    answer:
      "Yes! We have dedicated networking sessions, lunch breaks, and an evening social event where you can connect with other participants.",
  },
];
const FAQSection: React.FC = () => {
  return (
    <div className="relative py-20 3xl:max-w-[2400px] mx-auto h-auto overflow-x-hidden text-white bg-black font-afacad">
      <img
        src={robot}
        alt="ICT Meetup Robot Mascot"
        className="absolute w-[400px] h-auto hidden lg:block"
      />
      <div className="blur-3xl">
        <div className="absolute -z-1 top-[150px] w-[400px] h-[800px]  lg:w-[1200px] lg:h-[800px] bg-gradient-to-r from-[#0086A7] via-cyan-500 to-[#002783] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -z-10 top-[120px] right-0 w-[400px] h-[800px] lg:w-[1200px] lg:h-[800px] bg-gradient-to-r from-[#002783] via-[#001783] to-[#001783] rounded-full blur-3xl opacity-60"></div>
      </div>
      <div className="container flex justify-center mt-20">
        <div className="w-[1200px] z-10">
          <h1 className="mb-4 text-5xl font-semibold text-center">
            Your ICT Meetup Guide
          </h1>
          <p className="mb-8 text-center text-gray-300">
            We're Here To Help With Any Questions You Have
          </p>

          <Accordion
            type="single"
            collapsible
            className="bg-white backdrop-blur-lg bg-opacity-5 rounded-20"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={`item-${index + 1}`}
                value={`item-${index + 1}`}
                className="p-2 px-4 transition duration-300 ease-in-out border-none hover:backdrop-blur-lg hover:bg-white hover:bg-opacity-5"
              >
                <AccordionTrigger className="text-white text-[20px] ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-[18px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="container z-10 mt-24 text-center">
        <h2 className="mb-4 text-2xl font-semibold ">STILL HAVE A QUESTION?</h2>
        <p className="text-gray-300">
          Contact us at{" "}
          <a
            href="mailto:itclubprmo@prime.edu.np"
            className=" hover:text-blue-200"
          >
            itclubprime@prime.edu.np
          </a>{" "}
          or call us at{" "}
          <a href="tel:98-43744896" className="hover:text-blue-200">
            98-43744896
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
