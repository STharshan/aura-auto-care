import React from 'react'
import FAQSection from '../../components/Services/MOT/FAQ'
import ProblemSection from '../../components/Services/MOT/Problem'
import AboutSection from '../../components/Services/MOT/About'
import HeroSection from '../../components/Services/MOT/Hero'

const Mot = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ProblemSection />
            <FAQSection />
        </div>
    )
}

export default Mot
