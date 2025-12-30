import { Box } from "@mui/material";
import HeroSection from "@/components/frontpage-sections/HeroSection";
import InfoBlobSection from "@/components/frontpage-sections/InfoBlobSection";
import FlavorStripSection from "@/components/frontpage-sections/FlavorStripSection";
import ImpactSection from "@/components/frontpage-sections/ImpactSection";
import FlavorShowcaseSection from "@/components/frontpage-sections/FlavorShowcaseSection";
import TestimonialMarqueeSection from "@/components/frontpage-sections/TestimonialMarqueeSection";
import ExplainStripSection from "@/components/frontpage-sections/ExplainStripSection";
import FaqSection from "@/components/frontpage-sections/FaqSection";
import TextMarqueeSection from "@/components/frontpage-sections/TextMarqueeSection";
import BringPeopleTogetherSection from "@/components/frontpage-sections/BringPeopleTogetherSection";
import ContactSection from "@/components/frontpage-sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* STACKED SECTIONS */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#E53935",
          // backgroundImage:
          //   "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          // backgroundSize: "20px 20px",
        }}
      >
        <InfoBlobSection
          title="Who We Are​"
          description="The National Grocers Association (NGA) represents independent grocers, wholesalers, and suppliers nationwide. We advocate for fair competition, support industry growth, and help local grocery businesses thrive through education, resources, and connection."
          image="/assets/images/369.jpg"
          bgColor="#fbef43"
          textColor="#111"
          showHeadingDecor
          headingDecorSvg="/assets/images/flowers-svgrepo-com.svg"
        />

        <InfoBlobSection
          title="Independent Community Grocer Definition"
          description="Independent community grocers are the true entrepreneurs of the grocery industry, passionately committed to their customers, their associates and the markets they serve. Privately owned by families, or by employees, these retailers operate a variety of retail formats."
          image="/assets/images/868110.jpg"
          bgColor="#7F4E9F"
          textColor="#fff"
          reverse
          showHeadingDecor
          headingDecorSvg="/assets/images/store-svgrepo-com.svg"
          headingDecorPosition="centered"
        />

        <InfoBlobSection
          title="Our Mission"
          description="Our mission is to empower independent grocers by strengthening their ability to compete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla pariatur."
          image="/assets/images/3184418.jpg"
          bgColor="#6db54e"
          textColor="#111"
          showHeadingDecor
          headingDecorSvg="/assets/images/vegetables-diet-svgrepo-com.svg"
        />
      </Box>

      <FlavorStripSection />

      <ImpactSection />

      <FlavorShowcaseSection />

      <TestimonialMarqueeSection />

      <ExplainStripSection />

      <FaqSection />

      <TextMarqueeSection />

      <BringPeopleTogetherSection />

      <ContactSection />
    </>
  );
}
