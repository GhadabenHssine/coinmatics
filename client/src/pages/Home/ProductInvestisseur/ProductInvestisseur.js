import React from 'react'
import style from "./Product.module.css"
import rev from "../../img/rev.svg"
import secu from "../../img/secu.svg"
import pau from "../../img/pau.svg"
import port from "../../img/portfolio.svg"
import ges from "../../img/ges.svg"
import diver from "../../img/diversification.svg"


const ProductInvestisseur = () => {
    return (
        <div className={style.bloc}>
            <h1 className={style.Titre1}>Copie de commerce Pour la crypto-monnaie</h1>
            <h3 className={style.Titre2}> Notre produit de base pour les investisseurs </h3>
            <p className={style.paragraphe}>Un mélange unique d'opportunités pour générer des gains en capital et obtenir le meilleur des deux
                <br />mondes : les crypto-monnaies et les investissements réguliers.</p>
            <div className={style.gre}>
                <div>
                    <div className={style.blocImg}>
                    <img src={rev} alt="" className={style.image} />
                           
                        <div>
                            <h1 className={style.titreImg}>Revenu passif sous stéroïdes</h1>
                            <p className={style.paragrapheImg}>Profitez des bénéfices du trading <br />crypto actif tout en vous relâchant</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.blocImg}>
                        
                            <img src={diver} alt="" className={style.image} />
                        
                        <div>
                            <h1 className={style.titreImg}>Diversification</h1>
                            <p className={style.paragrapheImg}>Allouez vos fonds entre les traders <br /> avec différentes stratégies de trading</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.blocImg}>
                     
                            <img src={ges} alt="" className={style.image} />
                       
                        <div>
                            <h1 className={style.titreImg}>Gestion des risques</h1>
                            <p className={style.paragrapheImg}>Personnalisez votre niveau de risque <br /> pour chaque stratégie que vous<br /> suivez</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.blocImg}>
                      
                            <img src={secu} alt="" className={style.image} />
                       
                        <div>
                            <h1 className={style.titreImg}>Sécurité totale</h1>
                            <p className={style.paragrapheImg}>La plateforme fonctionne sans accès <br />direct à vos fonds</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.blocImg}>
                      
                            <img src={port} alt="" className={style.image} />
                        
                        <div>
                            <h1 className={style.titreImg}>Portefeuille synchronisé</h1>
                            <p className={style.paragrapheImg}>Alignez les actifs cryptographiques <br />avec le compte du commerçant en<br />un clic</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.blocImg}>
                 
                            <img src={pau} alt="" className={style.image} />
                        
                        <div>
                            <h1 className={style.titreImg}>Peau dans le jeu</h1>
                            <p className={style.paragrapheImg}>Les traders risquent leurs propres <br /> fonds lorsqu'ils fournissent des<br />transactions à copier</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInvestisseur