// src/Pages/Derby/Derby.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";
import WhyChooseSection from "../../Common/WhyChooseSection";
import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";
import PricingSection from "../../Common/PricingSection";
import PatientCareSection from "../../Common/PatientCareSection";
import FAQSection from "../../Common/FAQSection";
import FinalCTASection from "../../Common/FinalCTASection";
import DerbyMapSection from "../../Data/Derby/DerbyMapSection";

import {
  DerbyAreas,
  DerbyTitle,
  DerbySubtitle,
  HeroData,
  footer,
  DerbyServicesData,
  DerbyCTAData
} from "../../Data/Derby/servingAreas";
import { LeicesterAppointmentData } from "../../Data/Leicester/servingAreas";

function Derby() {
  return (
    <>
      {/* Hero Section */}
      <EarWaxHero {...HeroData} />

      {/* Serving Areas Section */}
      <ServingAreasSection
        areas={DerbyAreas}
        title={DerbyTitle}
        subtitle={DerbySubtitle}
        footer={footer}
      />

      {/* Services / Comparison Section */}
      <MicrosuctionComparison data={DerbyServicesData} />

      {/* Appointment Steps Section */}
      <AppointmentSteps data={LeicesterAppointmentData} />

      {/* Final Call to Action Section */}
      <FinalCTASection data={DerbyCTAData} />
    </>
  );
}

export default Derby;