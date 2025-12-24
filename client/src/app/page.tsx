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
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <InfoBlobSection
          title="Who We Are​"
          description="The National Grocers Association (NGA) represents independent grocers, wholesalers, and suppliers nationwide. We advocate for fair competition, support industry growth, and help local grocery businesses thrive through education, resources, and connection."
          image="/assets/images/369.jpg"
          bgColor="#FFF176"
          textColor="#111"
        />

        <InfoBlobSection
          title="Independent Community Grocer Definition"
          description="Independent community grocers are the true entrepreneurs of the grocery industry, passionately committed to their customers, their associates and the markets they serve. Privately owned by families, or by employees, these retailers operate a variety of retail formats, and while most are serviced by wholesale distributors, others may be partially or fully self-distributing. Independents differentiate in the marketplace based on the needs of the local community, while showing a strong commitment to civic life and providing their neighbors quality goods and nourishing foods."
          image="/assets/images/2152003889.jpg"
          bgColor="#7E57C2"
          textColor="#fff"
          reverse
        />

        <InfoBlobSection
          title="Our Mission"
          description="Our mission is to empower independent grocers by strengthening their ability to compete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          image="/assets/images/2152003889.jpg"
          bgColor="#2F9E44"
          textColor="#111"
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
