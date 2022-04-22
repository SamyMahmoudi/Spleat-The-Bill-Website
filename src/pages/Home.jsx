import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';

import Faq from './../components/Faq/index'

import Histoire from './../components/Histoire';

import TheFooter from './../components/TheFooter/index';

// section hero
import HeroSection from '../components/Hero';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
              <HeroSection />
              <Histoire />
              <Faq />
          </main>

          <TheFooter />
        </>
    );
};

export default Home;