import React,{useState} from 'react'
import style from "./Slider.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import  twitre from "../../img/twitter (1).svg"
import rowland from "../../img/rowland.jpg"
import ukpaka from "../../img/ukpaka.jpg"
import cryptoLivermore from "../../img/cryptoLivermore.jpg"
import mind from "../../img/mind.jpg"
import graham from "../../img/graham.jpg"

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    lazyLoad: false,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  const[text,setText]=useState(0);
  const[table1,setTable1]=useState(1);
 

 

  return (

    <div>
     <h2 className={ style .titre}>  Que pensent les utilisateurs<br /> de Coinmatics ?</h2>
      <br />
      <div className='container '>
        <div className={style.bloc}>
          <Slider {...settings}>

<div>
<div className={style.card1}>
<a href='#' className={style.lien}>
<div className={style.containerSlider}>
<div className={style.con}>
<div className={style.navbarslider}>
<img src={ukpaka} alt="ukpaka" className={style.ukpaka} />
<div className={style.blocParagraphe}>
<p className={style.pargraphe}>Victoria Ukpaka</p>
<p className={style.pargraphe1}>@Valucop</p>
</div>
<img src={twitre} alt="twitre" className={style.image}/>



</div>
<p className={style.par}>Coinmatics offers Copy Trading in it's simplicity. I didn't know there
 was a term for replicating someone's trading actions
 in order to maximize profits especially if you are new to trading until now.</p>
 <p className={style.date}>12:57 · 31 août 2020</p>
</div>
</div>
 </a>
 </div>
 </div>




 <div>
<div className={style.card1}>
<a href='#' className={style.lien}>
<div className={style.containerSlider}>
<div className={style.con}>
<div className={style.navbarslider}>
<img src={cryptoLivermore} alt="ukpaka" className={style.ukpaka} />
<div className={style.blocParagraphe}>
<p className={style.pargraphe}>CRYPTOLIVERMORE</p>
<p className={style.pargraphe1}>@Crypt0Livermore</p>
</div>
<img src={twitre} alt="twitre" className={style.image}/>


</div>
<p className={style.par}>Another platform that I have found interesting in my Crypto copy-trading
 exploration is coinmatics. I like their UI and the fact that the trader
 doesn’t need to trade from their platform necessarily, but can trade directly on the exchange</p>
 <p className={style.date}>13:33 · 31 août 2020</p>
</div>
</div>
 </a>
 </div>
 </div>
 


 <div>
<div className={style.card1}>
<a href='#' className={style.lien}>
<div className={style.containerSlider}>
<div className={style.con}>
<div className={style.navbarslider}>
<img src={rowland} alt="ukpaka" className={style.ukpaka} />
<div className={style.blocParagraphe}>
<p className={style.pargraphe}>Rowland</p>
<p className={style.pargraphe1}>@Oghiemoh1</p>
</div>
<img src={twitre} alt="twitre" className={style.image}/>


</div>
<p className={style.para}>Don't have time to trade? Worry less, Coinmatics got you covered with
 their unique copy trading. Coinmatics connects a part of your portfolio with the portfolio of your 
 desired trader in a usable graphical form.
 Once you copy a trader, all of their opened trades are automatically copied to your account.</p>
 <p className={style.date}>04:11 · 30 juil. 2020</p>
</div>
</div>
 </a>
 </div>
 </div>

             
          
         
 <div>
<div className={style.card1}>
<a href='#' className={style.lien}>
<div className={style.containerSlider}>
<div className={style.con}>
<div className={style.navbarslider}>
<img src={mind} alt="ukpaka" className={style.ukpaka} />
<div className={style.blocParagraphe}>
<p className={style.pargraphe}>Mind_The_Chart</p>
<p className={style.pargraphe1}>@ChartMind</p>
</div>
<img src={twitre} alt="twitre" className={style.image}/>


</div>
<p className={style.par}>My team and I are so proud to be working with coinmatics. 
We were looking for a place to support our strategy, and be able to share it, and we found it.
 The performances are excellent, the interface very intuitive and fast.</p>
 <p className={style.date}>13:19 · 1 mars 2021</p>
</div>
</div>
 </a>
 </div>
 </div>



 <div>
<div className={style.card1}>
<a href='#' className={style.lien}>
<div className={style.containerSlider}>
<div className={style.con}>
<div className={style.navbarslider}>
<img src={graham} alt="ukpaka" className={style.ukpaka} />
<div className={style.blocParagraphe}>
<p className={style.pargraphe}>Graham Invests</p>
<p className={style.pargraphe1}>@GrahamInvests</p>
</div>
<img src={twitre} alt="twitre" className={style.image}/>


</div>
<p className={style.par}>I’ve been using coinmatics copy trading platform for just over 2 months.
 What I love about the platform is 
that trades are performed right from my own binance account. So my money is always in my control.</p>
 <p className={style.date}>16:20 · 28 févr. 2021</p>
</div>
</div>
 </a>
 </div>
 </div>



          </Slider>
        </div>
      </div>
<div className={style.blocQUE}>
<div className={style.container}>
<div className={style.titreQu}>Informations sur la plate-forme</div>

<h3 className={style.titreh3} >Foire aux questions </h3>

</div>

 <div className={style.classNameAcc}  >
 <div className={style.accbloc}> 
<div className={style.question}>
<p className={style.TitreQes}>Qu'est-ce que le commerce de copie ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(1) } onDoubleClick={()=>setText(0)} >{text===1?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(1)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===1&& table1===1 &&<p className={style.paragraphean}>Le commerce de copie ou social est basé sur
       le suivi des commerçants rentables. Les traders professionnels gagnent de l'argent supplémentaire en fournissant leur expertise à des traders inexpérimentés, tandis que les investisseurs ont la
       possibilité de copier les transactions des experts et de réussir facilement sur le marché de la cryptographie.</p>}
</div>




<div className={style.question}>
<p className={style.TitreQes}>  Comment fonctionne le commerce de copie ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(2)} onDoubleClick={()=>setText(0)} >{text===2?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(2)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p></div>

<div className={style.answers}>
{text===2&& table1===2 &&<p className={style.paragraphean}> Le concept du crypto trading social est très simple : vous laissez quelqu'un d'autre développer la stratégie de trading pour vous en copiant directement les mêmes transactions qu'ils concluent en temps réel. En mode automatique, la plateforme de trading social négocie à votre place. En mode manuel, le service vous fournit des signaux Telegram de commerçants de crypto-monnaie et vous négociez vous-même en bourse..</p>}
</div>





<div className={style.question}>
<p className={style.TitreQes}>  Comment copier les traders chez Coinmatics ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(3) } onDoubleClick={()=>setText(0)} >{text===3?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(3)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===3&& table1===3 &&<p className={style.paragraphean}>Si vous souhaitez commencer le trading social, vous devez créer un compte Coinmatics et le connecter à votre compte d'échange en ajoutant une clé API. Une fois cela fait, choisissez la stratégie de n'importe quel trader à suivre en cliquant sur « S'inscrire » et suivez vos gains sur votre compte..</p>}
</div>


<div className={style.question}>
<p className={style.TitreQes}>Comment choisir le meilleur trader pour la copie ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(4) } onDoubleClick={()=>setText(0)} >{text===4?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(4)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===4&& table1===4 &&<p className={style.paragraphean}> Vous évaluez un trader avant de copier ses transactions en vérifiant les données statistiques crédibles de la stratégie de tout trader : historique des signaux, profit total, niveau de risque et période de trading.</p>}
</div>


<div className={style.question}>
<p className={style.TitreQes}>Est-il sûr de connecter mon compte d'échange à Coinmatics ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(5) } onDoubleClick={()=>setText(0)} >{text===5?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(5)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===5&& table1===5 &&<p className={style.paragraphean}> Notre plate-forme n'a besoin que d'un accès pour conclure des transactions pour effectuer nos opérations de trading social. Il n'est pas nécessaire de sélectionner « Activer les retraits » dans les restrictions de l'API. Cela garantit que votre solde reste sous votre contrôle total. De plus, nos utilisateurs sont en mesure de protéger le compte Coinmatics avec une authentification à deux facteurs..</p>}
</div>


<div className={style.question}>
<p className={style.TitreQes}>  Le copy trading est-il rentable ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(6) } onDoubleClick={()=>setText(0)} >{text===6?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(6)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===6&& table1===6 &&<p className={style.paragraphean}> Chez Coinmatics, il existe de nombreuses stratégies de trading rentables avec de bonnes performances de traders. Lorsque vous vous y abonnez, vous obtenez proportionnellement le même bénéfice qu'un commerçant. N'oubliez pas : les résultats antérieurs ne garantissent pas un résultat similaire.</p>}
</div>

<div className={style.question}>
<p className={style.TitreQes}>  Comment configurer un bot de trading crypto chez Coinmatics ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(7) } onDoubleClick={()=>setText(0)} >{text===7?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(7)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===7&& table1===7 &&<p className={style.paragraphean}>Actuellement, il n'est pas autorisé de configurer des robots de trading automatique sur notre plateforme. Cette fonctionnalité est prévue pour être publiée dans un avenir proche. Mais vous pouvez partager votre stratégie de trading basée sur des bots sur Coinmatics dès maintenant.</p>}
</div>


<div className={style.question}>
<p className={style.TitreQes}>  Le commerce de copie est-il légal ?</p>
<p className={style.paragrapheAco} onClick={()=>setText(8) } onDoubleClick={()=>setText(0)} >{text===8?<i className="fas fa-sort-up"></i>:<i  onClick={()=>setTable1(8)} onDoubleClick={()=>setTable1(0)} className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text===8&& table1===8 &&<p className={style.paragraphean}>Eh bien, dans la plupart des cas, il est légal de détenir et d'échanger des actifs cryptographiques. Notre logiciel vous permet de surveiller et de copier les transactions de votre trader préféré, toute l'exécution est effectuée par votre bourse (comme Binance). Veuillez noter que votre pays de résidence peut interdire votre participation au commerce de copie ou à la détention d'actifs cryptographiques, cela sera alors illégal pour vous personnellement. Par conséquent, nous vous conseillons de vérifier auprès de votre organisme de réglementation local si vous êtes autorisé à détenir des actifs cryptographiques, à les échanger ou à utiliser des installations de trading de copie.</p>}
</div>





</div> 
</div>   
</div>

<button className={style.btn}>Lire notre base de connaissances</button>

    </div>
  )
}

export default Sliders
