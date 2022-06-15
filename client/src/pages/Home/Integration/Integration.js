import React from 'react'
import style from "./integration.module.css";
import binance from "../../img/binance.svg";
import okex from "../../img/okex.svg";
import bybit from "../../img/bybit.svg"
import ftx from "../../img/ftx.svg"

const Integration = () => {
  return (
    <div>


        <div className={style.contanier}>
          <div className={style.bloc}>
            <h4 className={style.titreh4}>Intégrations</h4>
            <h2 className={style.titreh2}>Échanges soutenus</h2>
          </div>


          <div className={style.grid}>
            <div className={style.cadre}>
              <div className={style.cadreimg}>
                <img src={binance} alt="" className={style.img1} />

              </div>
              <p className={style.paragraphe}>Spot, USDⓈ-M Futures
                <br />
                (COIN-M Futures bientôt)</p>
            </div>

            <div className={style.cadre}>
              <div className={style.cadreimg}>
                <img src={okex} alt="" className={style.img1} />

              </div>
              <p className={style.paragraphe}>Spot
              </p>
            </div>


            <div className={style.cadre}>
              <div className={style.cadreimg}>
                <img src={bybit} alt="" className={style.img1} />

              </div>
              <p className={style.paragraphe}>
                USDT Perpetual

              </p>
            </div>
            <div className={style.cadre}>
              <div className={style.cadreimg}>
                <img src={ftx} alt="" className={style.img1} />

              </div>
              <p className={style.paragraphe}>Spot, Leveraged Tokens,
                <br />
                Tokenized Stock</p>
            </div>
          </div>
        </div>
    



    </div>
  )
}

export default Integration