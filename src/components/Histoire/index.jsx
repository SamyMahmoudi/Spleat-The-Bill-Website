import Mockup from './Mockup';
import Text from './Text';

import './../../sass/components/_Histoire.scss'

const Histoire = () => {
    return (
        <div className='Histoire'>
            <div className='Histoire-Wrapper'>
                <Mockup />
                <div className='Histoire-Content'>
                    <Text />
                </div>
            </div>
            <div className='Histoire-yellow-bg'></div>
        </div>
    );
};

export default Histoire;