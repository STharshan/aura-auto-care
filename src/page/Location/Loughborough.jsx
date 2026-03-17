// src/Pages/Loughborough/Loughborough.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";

import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";



import FinalCTASection from "../../Common/FinalCTASection";

import {
  LoughboroughAreas,
  LoughboroughTitle,
  LoughboroughSubtitle,
  HeroData,
  footer,
  LoughboroughServicesData,
  LoughboroughCTAData
} from "../../Data/Loughborough/servingAreas";
import { LeicesterAppointmentData } from "../../Data/Leicester/servingAreas";
import LoughboroughMapSection from "../../Data/Loughborough/LoughboroughMapSection"

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
      <LoughboroughMapSection />

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