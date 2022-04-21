import LogoPicture from './../../images/logo_header.png';
import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <NavLink to="#Hero" className="TheHeader-Logo">
            <img src={LogoPicture} alt="Logo - Spleat The Bill" />
        </NavLink>
    );
};

export default Logo;