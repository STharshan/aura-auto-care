import GalleryData from '../../components/Services/ServiceData/Gallery'
import AboutSection from '../../components/Services/Valeting/About'
import Gallery from '../../components/Services/Valeting/Gallery'
import HeroSection from '../../components/Services/Valeting/Hero'
import ValetingPackage from '../../components/Services/Valeting/ValetingPackage'

const Valeting = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ValetingPackage />
            <Gallery data={GalleryData.valleting.items}/>
        </div>
    )
}

export default Valeting
