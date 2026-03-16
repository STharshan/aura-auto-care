

import AboutSection from '../../components/Services/DeepRestoration/About'
import HeroSection from '../../components/Services/DeepRestoration/Hero'
import DeepPackage from '../../components/Services/DeepRestoration/DeepPackage'
import WhatInclude from '../../components/Services/DeepRestoration/WhatInclude'
import GallerySection from '../../components/Services/Valeting/Gallery'
import GalleryData from '../../components/Services/ServiceData/Gallery'

const DeepRestoration = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <DeepPackage />
            <WhatInclude />
            <GallerySection data={GalleryData.DeepRestoration.items}/>
        </div>
    )
}

export default DeepRestoration
