const Navigation = () => {
    return (
        <nav className="TheHeader-Nav">
            <ul className="menu-list">
                {/* history link */}
                <li className="menu-list-item">
                    <a href="#Histoire" title="L'histoire de Spleat The Bill">Histoire</a>
                </li>

                {/* features link */}
                <li className="menu-list-item">
                    <a href="#Fonctionnalites" title="Les fonctionnalités de Spleat The Bill">Fonctionnalités</a>
                </li>

                {/* faq link */}
                <li className="menu-list-item">
                    <a href="#FAQ" title="Toutes vos questions sur Spleat The Bill">FAQ</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;