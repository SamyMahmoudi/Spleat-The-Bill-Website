
import FaqBlock from './FaqBlock'

import './../../sass/components/_Faq.scss';

const Faq = () => {
    return(
        <>
            <section className='FaqSection'>
                <div className='FaqSection-Content'>
                    <div className='FaqSection-ContainerHeader'>
                        <h2 className='FaqSection-Title'>FAQ 👋🏻</h2>
                        <p className='FaqSection-Subtitle'>une question ? on y répond ! (peut-être)</p>
                    </div>
                    <FaqBlock />
                </div>
            </section>
        </>
    )
}

export default Faq