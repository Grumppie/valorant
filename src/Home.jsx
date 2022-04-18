import React from 'react'
import FeatureSection from './sections/FeatureCards/FeatureSection'
import LatestNews from './sections/latestNews/LatestNews'
import Slide3 from './sections/slide3/Slide3'
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <LatestNews />
            <Slide3 />
            <FeatureSection />
        </div>
    )
}

export default Home