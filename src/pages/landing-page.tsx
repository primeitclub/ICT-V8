import { Navbar } from "@/components/global/landing-navbar";
import GlimpseSection from "@/components/molecules/sections/glimpse-section";
import PosterSection from "@/components/molecules/sections/poster-section";

export default function LandingPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <PosterSection />
      <GlimpseSection />
    </>
  );
}
