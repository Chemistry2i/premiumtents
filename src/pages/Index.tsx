import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;