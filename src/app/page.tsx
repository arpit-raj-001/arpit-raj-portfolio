"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsDashboard from "@/components/StatsDashboard";
import ProjectsCTA from "@/components/ProjectsCTA";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsDashboard />
        <ProjectsCTA />
      </main>
      <Footer />
      <FloatingContactButton onClick={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
