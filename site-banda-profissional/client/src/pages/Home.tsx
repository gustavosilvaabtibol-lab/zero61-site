/*
 * Design: "Neon Stage" — Estética de Palco Noturno
 * Cores: Preto profundo (#050510) + Azul elétrico (primary) + Branco
 * Tipografia: Oswald (display) + Raleway (body)
 * Elementos: Equalizer bars, glow effects, glass cards
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <DifferentialsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
