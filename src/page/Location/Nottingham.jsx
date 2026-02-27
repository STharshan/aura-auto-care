// src/Pages/Nottingham/Nottingham.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";
import WhyChooseSection from "../../Common/WhyChooseSection";
import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";
import PricingSection from "../../Common/PricingSection";
import PatientCareSection from "../../Common/PatientCareSection";
import FAQSection from "../../Common/FAQSection";
import FinalCTASection from "../../Common/FinalCTASection";
import NottinghamMapSection from "../../Data/Nottingham/NottinghamMapSection";

import {
  NottinghamAreas,
  NottinghamTitle,
  NottinghamSubtitle,
  HeroData,
  footer,
  NottinghamServicesData,
  NottinghamCTAData
} from "../../Data/Nottingham/servingAreas";
import { LeicesterAppointmentData } from "../../Data/Leicester/servingAreas";

function Nottingham() {
  return (
    <>
      {/* Hero Section */}
      <EarWaxHero {...HeroData} />

      {/* Serving Areas Section */}
      <ServingAreasSection
        areas={NottinghamAreas}
        title={NottinghamTitle}
        subtitle={NottinghamSubtitle}
        footer={footer}
      />
      <NottinghamMapSection />
      {/* Services / Comparison Section */}
      <MicrosuctionComparison data={NottinghamServicesData} />
 
       {/* Appointment Steps Section */}
       <AppointmentSteps data={LeicesterAppointmentData} />

      {/* Final Call to Action Section */}
      <FinalCTASection data={NottinghamCTAData} />
    </>
  );
}

export default Nottingham;