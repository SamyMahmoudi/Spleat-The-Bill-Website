import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="TheHeader-Nav">
            <ul className="menu-list">
                {/* history link */}
                <li className="menu-list-item">
                    <NavLink to="#Histoire" title="L'histoire de Spleat The Bill">Histoire</NavLink>
                </li>

                {/* features link */}
                <li className="menu-list-item">
                    <NavLink to="#Fonctionnalites" title="Les fonctionnalités de Spleat The Bill">Fonctionnalités</NavLink>
                </li>

                {/* faq link */}
                <li className="menu-list-item">
                    <NavLink to="#FAQ" title="Toutes vos questions sur Spleat The Bill">FAQ</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;