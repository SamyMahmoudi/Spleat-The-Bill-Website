import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';
import Faq from './../components/Faq/index'
import TheFooter from './../components/TheFooter/index';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <h1>Page d'accueil</h1> 

            <Faq />
          </main>

          <TheFooter />
        </>
    );
};

export default Home;