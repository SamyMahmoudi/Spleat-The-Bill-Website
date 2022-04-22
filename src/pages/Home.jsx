import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';
import TheFooter from './../components/TheFooter/index';

// section hero
import HeroSection from '../components/Hero';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <HeroSection />
          </main>

          <TheFooter />
        </>
    );
};

export default Home;