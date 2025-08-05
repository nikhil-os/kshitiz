import Header from "@/components/layout/Header.js";
import Footer from "@/components/layout/Footer.js";
import HeroSection from "@/components/sections/HeroSection.js";
import SolutionsSection from "@/components/sections/SolutionsSection.js";
import FeaturesSection from "@/components/sections/FeaturesSection.js";
import SchedulingSection from "@/components/sections/SchedulingSection.js";
import IntegrationSection from "@/components/sections/IntegrationSection.js";
import TestimonialsSection from "@/components/sections/TestimonialsSection.js";
import CTASection from "@/components/sections/CTASection.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <SchedulingSection />
      <IntegrationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
