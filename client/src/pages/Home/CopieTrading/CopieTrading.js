import React from 'react'
import style from "./Copie.module.css"
import {Col,Row} from "react-bootstrap"
import grey from "../../img/grey.svg"
import start1 from '../../img/easy.svg'
import start2 from "../../img/easy-start-2.svg"
import start3 from "../../img/easy-start-3.svg"

const CopieTrading = () => {
  return (



        <div>

          <img src={grey} alt="gre" className={style.grey} />
          <div className={style.con}>
            <Row>
              <Col xs={4}>
                <div>
                  <div className={style.Titre1}>Come Iniziare il Copy Trading?</div>
                  <h3 className={style.Titre2}>Un Gioco da Ragazzi</h3>
                  <p className={style.paragraphe}>Non è mai stato così facile fare trading come un vero trader professionista - inizia in pochi passi.</p>
                  <button className={style.btn}>Iniziare il copy Trading</button>


                </div>
              </Col>
              <Col xs={8}>
                <div className={style.clleg}>
                  <div className={style.start1}>
                    <img src={start1} alt="s1" />
                    <div className={style.bloc}>
                      <div className={style.num}>1</div>
                      <p className={style.paragraphe1}>
                        Collega il tuo account di <br />borsa delle criptovalute</p>
                    </div>
                  </div>

                  <div className={style.start2}>
                    <img src={start2} alt="s2" />
                    <div className={style.bloc}>
                      <div className={style.num}>2</div>
                      <p className={style.paragraphe1}>

                        Scegli le migliori strategie <br /> di trading da seguire </p>
                    </div>
                  </div>
                  <div>
                    <img src={start3} alt="s3" />
                    <div className={style.bloc}>
                      <div className={style.num}>3</div>
                      <p className={style.paragraphe1}>

                        Traccia i tuoi guadagni in <br />modo conveniente</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

     

  )
}

export default CopieTrading