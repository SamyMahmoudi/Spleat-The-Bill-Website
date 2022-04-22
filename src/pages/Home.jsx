import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';
import Histoire from './../components/Histoire';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <h1>Page d'accueil</h1> 
            <Histoire />
          </main>
          
        </>
    );
};

export default Home;