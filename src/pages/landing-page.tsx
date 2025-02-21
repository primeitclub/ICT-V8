import { Navbar } from "@/components/global/landing-navbar";
import GlimpseSection from "@/components/molecules/sections/glimpse-section";
import PosterSection from "@/components/molecules/sections/poster-section";
import FAQSection from "../components/molecules/sections/faq-section";
import Hero from "@/components/heroPage/hero";
import Footer from "@/components/global/footer";
import ScheduleTable from "@/components/molecules/schedules/schedule-table";
import SponsorSection from "@/components/molecules/sections/sponsor-section";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <PosterSection />
      <GlimpseSection />
      <FAQSection />
      <ScheduleTable />
      <SponsorSection />
      <Footer />
    </>
  );
}
