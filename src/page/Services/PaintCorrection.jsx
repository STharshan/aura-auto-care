import AboutSection from '../../components/Services/PaintCorrection/About'
import GallerySection from '../../components/Services/PaintCorrection/Gallery'
import HeroSection from '../../components/Services/PaintCorrection/Hero'
import PaintPackage from '../../components/Services/PaintCorrection/PaintPackage'
import GalleryData from '../../components/Services/ServiceData/Gallery'

const PaintCorrection = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <PaintPackage />
            <GallerySection data={GalleryData.PaintCorrection} />
        </div>
    )
}

export default PaintCorrection
