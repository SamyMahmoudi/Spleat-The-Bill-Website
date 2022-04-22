import Annexe from "./Annexe"
import Contributeurs from "./Contributeurs"
import LogoFooter from "./LogoFooter"
import LogoIIM from "./LogoIIM"

import './../../sass/components/_TheFooter.scss';

const index = () => {
    return(
        <footer className="TheFooter">
            <div className="TheFooter-Content">
                <div className="TheFooter-Wrapper">
                    <LogoFooter />
                    <div className="Links">
                        <Contributeurs />
                        <Annexe />
                    </div>
                </div>
                <p className="Copyrights">© 2022 | spleat the bill | tous droits réservés.</p>
            </div>
            <LogoIIM />
        </footer>
    )
}

export default index