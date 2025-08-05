import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SchedulingSection from "@/components/sections/SchedulingSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

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
