import Hero from "@/components/sections/Hero";
import ValueSnapshot from "@/components/sections/ValueSnapshot";
import DeliveryEdge from "@/components/sections/DeliveryEdge";
import Journey from "@/components/sections/Journey";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ValueSnapshot />
        <DeliveryEdge />
        <Journey />
        <TechnicalSkills />
        <FeaturedProjects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
