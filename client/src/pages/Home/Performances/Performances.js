import React from 'react'
import style from "./Performances.module.css"
import point from "../../img/pointer-short.svg"

const Performances = () => {
  return (
    <div className={style.bloc}>
 <h1 className={style.Titre1}>Performances de la plate-forme</h1>
      <div className={style.PPF}>
        <div>
          <div className={style.temp}> 
          2 secondes </div>
          <p className={style.titre}>Vitesse de l'éclair</p>
          <p className={style.paragraphe}>Temps nécessaire pour répliquer une transaction</p>
          <img src={point} alt className={style.Img} />

        </div>
        <div>
          <div className={style.sec}> 98,5%</div>
          <p className={style.titre}>Exécution solide</p>
          <p className={style.paragraphe}>Taux de réussite des transactions de copie</p>
          <img src={point} alt className={style.Img} />

        </div>
        <div>
          <div className={style.sec}>99,6%</div>
          <p className={style.titre}>Durabilité</p>
          <p className={style.paragraphe}>Disponibilité du service</p>
          <img src={point} alt className={style.Img} />

        </div>

      </div>


    </div>
  )
}

export default Performances