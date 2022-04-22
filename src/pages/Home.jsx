import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';

// section hero
import HeroSection from '../components/Hero';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <HeroSection />
          </main>
          
        </>
    );
};

export default Home;