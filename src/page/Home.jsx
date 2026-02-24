import React from 'react'
import CreditSection from "../components/CreditSection"
import HeroSection from "../components/HeroSection"
import PartnersCarousel from "../components/Partner"
import ProductSection from "../components/Product"
import ProcessSection from "../components/Service"
import ContactSection from "../components/ContactSection"
import MapSection from "../components/MapSection"
import Review from '../components/Review'
import GallerySection from "../components/GallerySection"

const Home = () => {
    return (
        <div>
            <HeroSection />
            {/* <PartnersCarousel /> */}
            <CreditSection />
            <ProcessSection />
            <ProductSection />
            <GallerySection />
            <Review />
            <ContactSection />
            <MapSection />
        </div>
    )
}

export default Home
