import './../sass/pages/_home.scss';

import TheHeader from './../components/TheHeader/index';
import Histoire from './../components/Histoire';

const Home = () => {
    return (
        <>
          <TheHeader />

          <main>
            <Histoire />
          </main>
          
        </>
    );
};

export default Home;