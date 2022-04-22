import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';
import TheFooter from './../components/TheFooter/index';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <h1>Page d'accueil</h1> 
          </main>

          <TheFooter />
        </>
    );
};

export default Home;