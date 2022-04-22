import Headlines from "./Headlines";
import Image from "./Image";

import './../../sass/components/_SectionHero.scss';

const HeroSection = () => {
    return (
        <section className="HeroSection" id="Hero">
            <div className="HeroSection-Wrapper">
                <Headlines />
                <Image />
            </div>
        </section>
    );
};

export default HeroSection;