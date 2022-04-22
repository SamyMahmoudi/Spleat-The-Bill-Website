import Logo from './Logo';
import Navigation from './Navigation';
import Cta from './Cta';

import './../../sass/components/_TheHeader.scss';

const index = () => {
    return (
        <header className='TheHeader'>
            <div className='TheHeader-Wrapper'>
                <Logo />
                <Navigation />
                <Cta />
            </div>
        </header>
    );
};

export default index;