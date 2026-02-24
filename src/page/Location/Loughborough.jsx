// src/Pages/Loughborough/Loughborough.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";
import WhyChooseSection from "../../Common/WhyChooseSection";
import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";
import PricingSection from "../../Common/PricingSection";
import PatientCareSection from "../../Common/PatientCareSection";
import FAQSection from "../../Common/FAQSection";
import FinalCTASection from "../../Common/FinalCTASection";
import LoughboroughMapSection from "../../Data/Loghborough/LoghboroughMapSection"

import {
  LoughboroughAreas,
  LoughboroughTitle,
  LoughboroughSubtitle,
  HeroData,
  footer,
  LoughboroughServicesData,
  LoughboroughCTAData
} from "../../Data/Loghborough/servingAreas";
import { LeicesterAppointmentData } from "../../Data/Leicester/servingAreas";

function Loughborough() {
  return (
    <>
      {/* Hero Section */}
      <EarWaxHero {...HeroData} />

      {/* Serving Areas Section */}
      <ServingAreasSection
        areas={LoughboroughAreas}
        title={LoughboroughTitle}
        subtitle={LoughboroughSubtitle}
        footer={footer}
      />

      {/* Services / Comparison Section */}
      <MicrosuctionComparison data={LoughboroughServicesData} />

      {/* Appointment Steps Section */}
      <AppointmentSteps data={LeicesterAppointmentData} />

      {/* Final Call to Action Section */}
      <FinalCTASection data={LoughboroughCTAData} />
    </>
  );
}

export default Loughborough;