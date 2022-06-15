import React from 'react'
import style from "./Footre.module.css"

import blue from "../../img/darkblue.svg"
import { Container, Col, Row } from "react-bootstrap"
const Footer = () => {
    return (
        <div className={style.footer}>

            <div className={style.blocimg}>
                <img src={blue} alt="darkblue" />
            </div>
            <div className={style.bloc}>

                <Container>
                    <Row>
                        <Col xs={4}>
                            <p className={style.paragraphe}>N'hésitez pas à nous contacter:</p>
                            <div className={style.paragraphe2}><p>hello@coinmatics.com</p></div>
                          
                                <div className={style.socialeM}>
                                    <a href='#' name="instagrame" className={style.instagrame} />
                                    <a href='#' name="facebook" className={style.facebook} />
                                    <a href='#' name="twitre" className={style.twitre} />
                                    <a href='#' name="medium" className={style.medium} />
                                    <a href='#' name="mono" className={style.mono} />
                                </div>

                            
                        </Col>




                        <Col xs={8}>
                            <div className={style.blocList}>
                                <div className={style.invesstis}>
                                    <p className={style.paragraphe3}>
                                        Investisseurs</p>

                                    <ul className={style.list}>

                                        <li className={style.list1}>
                                            <a href="#">Commerce de copie</a>
                                        </li>
                                        <li className={style.list1}>
                                            <a href="#">Stratégies</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className={style.invesstis}>
                                    <p className={style.paragraphe3}>
                                        Commerçants</p>

                                    <ul className={style.list}>

                                        <li className={style.list1}>

                                            <a href="#">Commerce de copie</a>
                                        </li>
                                        <li className={style.list1}>
                                            <a href="#">Outils d'étude de marché</a>

                                        </li>

                                        <li className={style.list1}>

                                            <a href="#">Smart Terminal</a>
                                        </li>
                                    </ul>
                                </div>


                                <div className={style.invesstis}>
                                    <p className={style.paragraphe3}>
                                        Société</p>

                                    <ul className={style.list}>

                                        <li className={style.list1}>
                                            <a href="#">À propos de nous</a>

                                        </li>
                                        <li className={style.list1}>
                                            <a href="#">Blog</a>

                                        </li>

                                        <li className={style.list1}>

                                            <a href="#">Carrières</a>
                                        </li>

                                        <li className={style.list1}>
                                            <a href="#">Légal</a>

                                        </li>
                                        <li className={style.list1}>
                                            <a href="#">Contacts</a>

                                        </li>

                                    </ul>
                                </div>

                                <div className={style.invesstis}>
                                    <p className={style.paragraphe3}>
                                        Soutien</p>

                                    <ul className={style.list}>

                                        <li className={style.list1}>
                                            <a href="#">Base de connaissances</a>
                                        </li>
                                        <li className={style.list1}>
                                            <span>Chat en direct</span>
                                        </li>

                                        <li className={style.list1}>
                                            <a href="#">Soumettre une demande</a>
                                        </li>
                                        <li className={style.list1}>
                                            <a href="#">Page d'état</a>
                                        </li>


                                    </ul>
                                </div>











                            </div>
                        </Col>
                    </Row>









                </Container>









                <div className={style.fin}>
                </div>

                <div className={style.blocfin}>


                    <p className={style.paragfin}>©2022 Copytrading Solutions Limited</p>

                    <div className={style.footfin}>
                        <a href="#">termes</a>
                        <a href="#">Politique de confidentialité</a>
                        <a href="#">Divulgation des risques</a>




                    </div>
                </div>

            </div>









        </div>
    )
}

export default Footer

