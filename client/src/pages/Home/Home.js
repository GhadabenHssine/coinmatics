
import React from 'react'
import style from "./Home.module.css"
import { Container, Col, Row } from 'react-bootstrap'
import img1 from "../img/img1.png"
import img2 from "../img/img2.svg"

import CopieTrading from "./CopieTrading/CopieTrading"
import Comercant from "./Comerçant/Comercant"
import Footer from "./Footre/Footer"
import Sliders from './Slider/Sliders'
import Integration from "./Integration/Integration"
import ProductInvestisseur from "./ProductInvestisseur/ProductInvestisseur"
import Performances from "./Performances/Performances"
import Tables from '../TableS/TableStra'
import { useTranslation } from 'react-i18next';




const Home = () => {
    const { t} = useTranslation();
    return (
      
        <div>
     

        



        <div className={style.bloc}>
            <Row>
                <Col xs={6} className={style.col1}><h2 className={style.titre}>Performances de trading crypto réussies
                    sur le pilote automatique</h2>
                    <p className={style.paragraphe}>Le service de copy trading de Coinmatics permet de copier les transactions effectuées par les
                        traders et les robots de trading, ainsi que de recevoir des signaux de stratégies vérifiées.</p>
                    <div>
                        <a className={style.btn} href='#'>Commencer le Copy Trading</a>
                    </div>

                    <button className={style.btnAide} ><span className={style.point}>?</span>Aide</button>
                </Col>
                <Col xs={6}>

                    <div className={style.conImg}>
                        <img src={img1} alt="img1" className={style.img1} />
                        <img src={img2} alt="img2" className={style.img2} />

                    </div>





                </Col>
            </Row>
        </div>
        <Tables/>
     <ProductInvestisseur/>
     <Performances/> 
      <CopieTrading/>
      <Comercant/>
      <Integration/>
      <Sliders/>
      <Footer/>
        </div>
    )
}
export default Home
