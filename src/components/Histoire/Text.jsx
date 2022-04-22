import Button from './Button';

const Text = () => {
    return(
        <div>
            <h2 className='title'>Histoire</h2>
            <div className='text-container'>
                <p className='text-content'>«Spleat the bill» est la première application de paiement depuis sa table de restaurant ou l’expérience utilisateur est immersive et intuitive</p>
                <p className='text-content'>En offrant la possibilité à vos clients d’être autonomes au moment du paiement, vous contribuez à rendre l’expérience client inoubliable et pertinente ! Vos équipes sont ainsi pleinement concentrées sur la qualité de leur service</p>
            </div>
            <Button />
        </div>
    )
};

export default Text;