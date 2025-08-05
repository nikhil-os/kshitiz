"use client";

import { useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import SolutionsSection from "../components/sections/SolutionsSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import SchedulingSection from "../components/sections/SchedulingSection";
import IntegrationSection from "../components/sections/IntegrationSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CTASection from "../components/sections/CTASection";
import LoadingScreen from "../components/3d/LoadingScreen";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  if (showLoading) {
    return <LoadingScreen onComplete={() => setShowLoading(false)} />;
  }

  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <SolutionsSection />
      <FeaturesSection />
      <SchedulingSection />
      <IntegrationSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
