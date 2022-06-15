import React, { useState } from 'react'
import style from "./comercant.module.css"
import marche from "../../img/marche.svg"
import blue from "../../img/darkblue.svg"
import { Col, Container, Row } from 'react-bootstrap'


import img1 from "../../img/ticker.png"
import img2av from "../../img/imgAva2.png"
import portfolio from "../../img/portfolio.png"
import analytics from "../../img/analytics.png"


const Comercant = () => {


    const [table, setTable] = useState(1);



    return (
        <div className={style.marche}>
            <div className={style.container}>

                <h4 className={style.titre1}>Êtes-vous un commerçant de crypto rentable ?</h4>
                <h2 className={style.titreh2}>Gagnez plus de vos métiers</h2>
                <p className={style.paragraphe}>Soumettez simplement votre stratégie de trading, obtenez des abonnés et <br />gagnez des bénéfices supplémentaires de vos transactions sans augmenter<br /> le risque ou la marge.</p>
                <button className={style.btn}>Apprendre encore plus</button>

                <div className={style.blocImg}>
                    <div className={style.ImgCon}>
                        <img src={marche} alt="marche" className={style.marche} />
                    </div>
                </div>

                <Container className={style.animation}>
                    <div className={style.bloc}>

                        <div className={style.blocTitre}>
                            <div className={style.TitreBloc2}>Nos outils d'étude de marché gratuits</div>
                        </div>

                        <Row>
                            <Col  onMouseLeave={() => setTable(0)}>


                                <div className={style.containerAcordion}>
                                    <div className={style.accordionBloc}>





                                        <div className={style.question}>
                                            <h1 className={style.TitreQes}>Alertes de téléscripteur</h1>
                                            <p className={style.paragrapheAco} onClick={() => {setTable(1)}}>{table === 1 ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}</p>
                                        </div>

                                        <div className={style.answers}>
                                            {table === 1 && <p>Configurez des alertes de téléscripteur avec des paramètres personnalisés pour recevoir des notifications immédiates lorsqu'il sera déclenché. Toutes les notifications seront envoyées à votre compte Telegram.</p>}
                                        </div>

                                        <div className={style.question}>
                                            <h1 className={style.TitreQes}>Arbitrage cryptographique</h1>
                                            <p className={style.paragrapheAco} onClick={() => setTable(2)} >{table === 2 ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}</p>
                                        </div>

                                        <div className={style.answers}>
                                            {table === 2 && <p>Obtenez des informations sur les échanges d'arbitrage auprès de diverses bourses pour trouver des offres avec le spread le plus élevé. Le mode manuel et les signaux Telegram concernant les offres les plus rentables sont disponibles.</p>}
                                        </div>

                                        <div className={style.question}>
                                            <h1 className={style.TitreQes}>Portefeuille</h1>
                                            <p className={style.paragrapheAco} onClick={() => setTable(3)} >{table === 3 ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}</p>
                                        </div>

                                        <div className={style.answers}>
                                            {table === 3 && <p> Suivez l'historique de vos transactions et activez des rapports quotidiens sur l'état de votre portefeuille à partir de plusieurs bourses et portefeuilles de crypto-monnaie</p>}
                                        </div>


                                        <div className={style.question}>
                                            <h1 className={style.TitreQes}>Analytique</h1>
                                            <p className={style.paragrapheAco} onClick={() => setTable(4)} >{table === 4 ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}</p>
                                        </div>

                                        <div className={style.answers}>
                                            {table === 4 && <p> Examinez le marché de la cryptographie sous différents aangles à l'aide de nos tableaux de bord analytiques : Twitter  Analytics, Fear and Greed Index, BTC Social Volume, etc.</p>}
                                        </div>





                                    </div>

                                </div>
                            </Col>
                            <Col>
                            {table <1 && <div>
                                    <img src={img1} alt="" className={style.img1} />
                                </div>}

                                {table === 1 && <div>
                                    <img src={img1} alt="" className={style.img1} />
                                </div>}
                                {table === 2 && <div>
                                    <img src={img2av} alt="" className={style.img1} />
                                </div>}
                                {table === 3 && <div>
                                    <img src={portfolio} alt="" className={style.img1} />
                                </div>}
                                {table === 4 && <div>
                                    <img src={analytics} alt="" className={style.img1} />
                                </div>}


                            </Col>
                        </Row>
                        <button className={style.btncommencer}>Commencer</button>
                        <br /><br />
                    </div>
                </Container>
            </div>

            <div className={style.bgbleu}>
                <img src={blue} alt='' className={style.blueimg} />
            </div>


        </div>

    )
}

export default Comercant