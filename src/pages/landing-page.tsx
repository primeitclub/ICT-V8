import { Navbar } from "@/components/global/landing-navbar";
import GlimpseSection from "@/components/molecules/sections/glimpse-section";
import PosterSection from "@/components/molecules/sections/poster-section";
import FAQSection from "../components/molecules/sections/faq-section";
import Hero from "@/components/heroPage/hero";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <PosterSection />
      <GlimpseSection />
      <FAQSection />
    </>
  );
}

import Footer from "@/components/global/footer";
import ScheduleTable from "@/components/molecules/schedules/schedule-table";
export default function LandingPage() {
  return (
    <>
      <ScheduleTable />
      <Footer />

      {/* <div className=" bg-gradient-to-br  from-[#001783CC] via-gray-900 to-[#0086A7CC] text-white "> */}
      {/* </div > */}
    </>
  );
}
