import { NavLink } from "react-router-dom";

const Headlines = () => {
    return (
        <div className="HeroSection-Headlines">
            <h1>Spleat The Bill</h1>
            <p>Payez et partagez votre addition rapidement et sans prise de tête</p>
            <NavLink to="#Histoire" title="En savoir plus">En savoir plus</NavLink>
        </div>
    );
};

export default Headlines;