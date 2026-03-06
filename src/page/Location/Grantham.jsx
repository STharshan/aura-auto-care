// src/Pages/Grantham/Grantham.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";

import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";



import FinalCTASection from "../../Common/FinalCTASection";
import GranthamMapSection from "../../Data/Grantham/GranthamMapSection";

import {
  GranthamAreas,
  GranthamTitle,
  GranthamSubtitle,
  HeroData,
  footer,
  GranthamServicesData,
  GranthamCTAData
} from "../../Data/Grantham/servingAreas";
import { LeicesterAppointmentData } from "../../Data/Leicester/servingAreas";

function Grantham() {
  return (
    <>
      {/* Hero Section */}
      <EarWaxHero {...HeroData} />

      {/* Serving Areas Section */}
      <ServingAreasSection
        areas={GranthamAreas}
        title={GranthamTitle}
        subtitle={GranthamSubtitle}
        footer={footer}
      />

      <GranthamMapSection />

      {/* Services / Comparison Section */}
      <MicrosuctionComparison data={GranthamServicesData} />

      {/* Appointment Steps Section */}
      <AppointmentSteps data={LeicesterAppointmentData} />

      {/* Final Call to Action Section */}
      <FinalCTASection data={GranthamCTAData} />
    </>
  );
}

export default Grantham;