import React from 'react'
import FAQSection from '../../components/Services/Diagnostics/FAQ'
import ProblemSection from '../../components/Services/Diagnostics/Problem'
import AboutSection from '../../components/Services/Diagnostics/About'
import HeroSection from '../../components/Services/Diagnostics/Hero'

const Diagnostics = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProblemSection />
            <FAQSection />
        </div>
    )
}

export default Diagnostics;
