
import CreditSection from "../components/CreditSection"
import HeroSection from "../components/HeroSection"
import ProcessSection from "../components/Service"
import ContactSection from "../components/ContactSection"
import MapSection from "../components/MapSection"
import Review from '../components/Review'
import GallerySection from "../components/GallerySection"

const Home = () => {
    return (
        <div>
            <HeroSection />
            <CreditSection />
            <ProcessSection />
            <GallerySection />
            <Review />
            <ContactSection />
            <MapSection />
        </div>
    )
}

export default Home
