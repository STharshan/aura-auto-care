// src/Pages/Nottingham/Nottingham.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";
import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";
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