import HeroSection from "@/components/frontpage-sections/HeroSection";
import InfoBlobSection from "@/components/frontpage-sections/InfoBlobSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* FIRST info section */}
      <InfoBlobSection
        title="What is GrocerConnect?"
        description="GrocerConnect is a community-first platform designed to support local grocers, suppliers, and partners."
        image="/assets/images/369.jpg"
        blobColor="#FFF176"
        outerBg="#E53935"
      />

      {/* SECOND section */}
      <InfoBlobSection
        title="Why GrocerConnect?"
        description="GrocerConnect empowers local communities by strengthening relationships and sharing knowledge."
        image="/assets/images/2152003889.jpg"
        blobColor="#7E57C2"
        outerBg="#E53935"
        reverse
        overlapTop
      />
    </>
  );
}
