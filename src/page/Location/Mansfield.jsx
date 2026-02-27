// src/Pages/Mansfield/Mansfield.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";
import WhyChooseSection from "../../Common/WhyChooseSection";
import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";
import PricingSection from "../../Common/PricingSection";
import PatientCareSection from "../../Common/PatientCareSection";
import FAQSection from "../../Common/FAQSection";
import FinalCTASection from "../../Common/FinalCTASection";
import MansfieldMapSection from "../../Data/Mansfield/MansfieldMapSection";

import {
  MansfieldAreas,
  MansfieldTitle,
  MansfieldSubtitle,
  HeroData,
  footer,
  MansfieldServicesData,
  MansfieldCTAData
} from "../../Data/Mansfield/servingAreas";
import { LeicesterAppointmentData } from "../../Data/Leicester/servingAreas";

function Mansfield() {
  return (
    <>
      {/* Hero Section */}
      <EarWaxHero {...HeroData} />

      {/* Serving Areas Section */}
      <ServingAreasSection
        areas={MansfieldAreas}
        title={MansfieldTitle}
        subtitle={MansfieldSubtitle}
        footer={footer}
      />
      <MansfieldMapSection />
      {/* Services / Comparison Section */}
      <MicrosuctionComparison data={MansfieldServicesData} />


      {/* Appointment Steps Section */}
      <AppointmentSteps data={LeicesterAppointmentData} />

      {/* Final Call to Action Section */}
      <FinalCTASection data={MansfieldCTAData} />
    </>
  );
}

export default Mansfield;