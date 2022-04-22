import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';

// section hero
import HeroSection from '../components/Hero';
import FeatureSection from '../components/Features/index';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <HeroSection />
          </main>
          <FeatureSection/>
        </>
    );
};

export default Home;