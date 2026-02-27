// src/Pages/Leicester/Leicester.jsx

import EarWaxHero from "../../Common/HeroSection";
import ServingAreasSection from "../../Common/ServingAreasSection";
import WhyChooseSection from "../../Common/WhyChooseSection";
import MicrosuctionComparison from "../../Common/MicrosuctionComparison";
import AppointmentSteps from "../../Common/AppointmentSteps";
import PricingSection from "../../Common/PricingSection";
import PatientCareSection from "../../Common/PatientCareSection";
import FAQSection from "../../Common/FAQSection";
import FinalCTASection from "../../Common/FinalCTASection";
import LeicesterMapSection from "../../Data/Leicester/LeicesterMapSection";

import {
  LeicesterAreas,
  LeicesterTitle,
  LeicesterSubtitle,
  HeroData,
  footer,
  LeicesterServicesData,
  LeicesterAppointmentData,
  LeicesterCTAData
} from "../../Data/Leicester/servingAreas";

function Leicester() {
  return (
    <>
      {/* Hero Section */}
      <EarWaxHero {...HeroData} />

      {/* Serving Areas Section */}
      <ServingAreasSection
        areas={LeicesterAreas}
        title={LeicesterTitle}
        subtitle={LeicesterSubtitle}
        footer={footer}
      />
      <LeicesterMapSection />
      {/* Services / Comparison Section */}
      <MicrosuctionComparison data={LeicesterServicesData} />

      {/* Appointment Steps Section */}
      <AppointmentSteps data={LeicesterAppointmentData} />


      {/* Final Call to Action Section */}
      <FinalCTASection data={LeicesterCTAData} />
    </>
  );
}

export default Leicester;