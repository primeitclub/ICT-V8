import { Navbar } from "@/components/global/landing-navbar";
import GlimpseSection from "@/components/molecules/sections/glimpse-section";
import PosterSection from "@/components/molecules/sections/poster-section";
import FAQSection from "../components/molecules/sections/Faq";
import Hero from "@/components/heroPage/hero";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <PosterSection />
      <GlimpseSection />
      <FAQSection />
    </>
  );
}
