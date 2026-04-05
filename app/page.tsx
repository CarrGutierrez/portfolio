import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import GraphicsSection from "@/components/GraphicsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesGallerySection from "@/components/CertificatesGallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e1011]">
      <Navigation />
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <HeroSection />
        <WorkSection />
        <GraphicsSection />
        <ExperienceSection />
        <CertificatesGallerySection />
      </div>
      <Footer />
    </main>
  );
}
