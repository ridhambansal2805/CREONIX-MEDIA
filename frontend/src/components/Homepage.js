import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { mockData } from "../data/mock";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#151515] text-white">
      <Header navigation={mockData.navigation} />
      <HeroSection heroData={mockData.hero} stats={mockData.stats} />
      <ServicesSection services={mockData.services} />
      <CaseStudiesSection caseStudies={mockData.caseStudies} />
      <TestimonialsSection testimonials={mockData.testimonials} />
      <ContactSection contactData={mockData.contact} />
      <Footer contactData={mockData.contact} />
    </div>
  );
};

export default Homepage;