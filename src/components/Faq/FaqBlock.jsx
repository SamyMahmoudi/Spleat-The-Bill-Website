const FaqBlock = () => {

    const dataFaq = [
        {
            title : "Quand est-ce que l’application sera disponible ?",
            content : "On a à ce jour, pas encore de date précise à communiquer concernant une potentielle date de sortie, cependant on vous tiendra informé de l’évolution de spleat the bill au fur et à mesure ! Vous pouvez d’ores et déjà tester notre première démo ici."
        },
        {
            title : "Avons-nous besoin de se créer un compte pour utiliser l’application ?",
            content : "Et bien non ! pas besoin de se créer un compte pour utiliser l’application. Après avoir scanner le QR code, vous n’avez qu’à cliquer sur le boutton “payer l’addition”, entrez votre prénom et vous pouvez sélectionner les produits que vous souhaitez ou partager directement l’addition !"
        },
        {
            title : "Pourquoi adhérer à votre solution ? ",
            content : "En offrant la possibilité à vos clients d’être autonomes au moment du paiement, vous contribuez à rendre l’expérience client inoubliable et pertinente ! Vos équipes sont ainsi pleinement concentrées sur la qualité de leur service et se libèrent d’une tâche sans réelle valeur ajoutée évitant de faire patienter vos clients. Ainsi, vos tables se libèrent plus rapidement et vous êtes en mesure d’accueillir de nouveaux clients et d’améliorer la rotation de vos tables tout en augmentant votre chiffre d’affaires."
        }
    ]

    return(
        <>
            {dataFaq.map((Question, i) => (
            <details key={i} className="FaqBlock"> 
                <summary>{Question.title}</summary>
                <p>{Question.content}</p>
            </details>
            ))}
        </>
    )
}

export default FaqBlock