import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ShortAboutSection from "@/components/sections/ShortAboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectGallery from "@/components/sections/ProjectGallery";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FaqSection from "@/components/sections/FaqSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/ui/MobileStickyBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Header with utility topbar & navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Core Services Cards */}
        <ServicesSection />

        {/* 3. Short About Section */}
        <ShortAboutSection />

        {/* 4. Why Choose Us (Trust Pillars) */}
        <WhyChooseUs />

        {/* 4. Completed Projects Showcase Gallery */}
        <ProjectGallery />

        {/* 5. 5-Step Service Process */}
        <ServiceProcess />

        {/* 6. Hanoi Districts Coverage */}
        <ServiceAreas />

        {/* 7. Accessible FAQ Accordion */}
        <FaqSection />

        {/* 8. Final High-Conversion CTA Banner */}
        <FinalCtaSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Fixed Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
