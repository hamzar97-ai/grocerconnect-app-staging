import { Box } from "@mui/material";
import HeroSection from "@/components/frontpage-sections/HeroSection";
import InfoBlobSection from "@/components/frontpage-sections/InfoBlobSection";
import FlavorStripSection from "@/components/frontpage-sections/FlavorStripSection";
// import ImpactSection from "@/components/frontpage-sections/ImpactSection";
import FlavorShowcaseSection from "@/components/frontpage-sections/FlavorShowcaseSection";
import TestimonialMarqueeSection from "@/components/frontpage-sections/TestimonialMarqueeSection";
import ExplainStripSection from "@/components/frontpage-sections/ExplainStripSection";
import FaqSection from "@/components/frontpage-sections/FaqSection";
// import TextMarqueeSection from "@/components/frontpage-sections/TextMarqueeSection";
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
          backgroundColor: "primary.main",
          // backgroundImage:
          //   "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          // backgroundSize: "20px 20px",
        }}
      >
        <InfoBlobSection
          title={{
            line1: "Independent,",
            line2: "Not Alone",
          }}
          description="Running an independent grocery store should not mean paying more, negotiating alone, or 
          falling behind larger chains. GrocerConnect gives you what big chains have: scale, negotiated pricing, and centralized
          procurement by being part of our collective network."
          image="/assets/images/369.jpg"
          bgColor="secondary.main"
          textColor="#111"
          showHeadingDecor
          headingDecorSvg="/assets/images/flowers-svgrepo-com.svg"
        />

        <InfoBlobSection
          title={{
            line1: "How We",
            line2: "Work",
          }}
          description="Say hello to a simple connection between grocers and suppliers.
          Join GrocerConnect by completing a quick onboarding form and access your store dashboard.
          Enter what you need to restock and submit your order. Suppliers receive the combined orders,
          fulfill them, and deliver as scheduled. Orders, invoices, and payments stay organized and in
          sync, so everything runs smoothly without extra back-and-forth."
          image="/assets/images/868110.jpg"
          bgColor="info.main"
          textColor="#fff"
          reverse
          showHeadingDecor
          headingDecorSvg="/assets/images/store-svgrepo-com.svg"
          headingDecorPosition="centered"
        />

        <InfoBlobSection
          title={{
            line1: "Community",
            line2: "First",
          }}
          description="GrocerConnect is committed to supporting inclusive growth, collaboration, and long-term
          community well-being. We believe thriving communities depend on fairness, cooperation, and
          opportunity. Our work is guided by a commitment to strengthen local economies and support
          community resilience."
          image="/assets/images/3184418.jpg"
          bgColor="success.main"
          textColor="#111"
          showHeadingDecor
          headingDecorSvg="/assets/images/vegetables-diet-svgrepo-com.svg"
        />
      </Box>

      <FlavorStripSection />

      {/* <ImpactSection /> */}

      <FlavorShowcaseSection />

      <TestimonialMarqueeSection />

      <ExplainStripSection />

      <FaqSection />

      {/* <TextMarqueeSection /> */}

      <BringPeopleTogetherSection />

      <ContactSection />
    </>
  );
}
