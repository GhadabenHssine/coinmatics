import React,{useState} from 'react'
import style from "./Navb.module.css";
import medium from "../img/medium.svg"
import { Container,Navbar,Nav,Dropdown,Form} from 'react-bootstrap';
import fr from "../img/fr.svg";
import en from "../img/en.svg";
import pr from "../img/pt.svg";
import es from "../img/es.svg";
import cn from "../img/cn.svg";
import ru from "../img/ru.svg";
import ita from "../img/it.svg";
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';







const Navb = () => {

const [table1,setTable1]=useState(0);

//i18n next
const { t, i18n } = useTranslation();

const handelLanguge=(e)=>{
  i18n.changeLanguage(e.target.value)

}


  return (

<div onMouseLeave={() => setTable1(0)} >
<Navbar bg="white" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"  style={{marginLeft:"30px"}}  ><img src={medium} alt="logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
       
      >
       <Nav.Link href="#action1" ><div  onMouseMove={() => setTable1(1)}  className={style.Home}>Investisseurs<i class="fa-solid fa-angle-down"></i></div></Nav.Link>
    <Nav.Link href="#action1"><div className={style.Home} onMouseMove={()=>{setTable1(2)}}>Commerçants<i class="fa-solid fa-angle-down"></i></div></Nav.Link>
        <Nav.Link href="#action1" ><div  className={style.Home}>Prix <i class="fa-solid fa-angle-down"></i></div></Nav.Link>
        <Nav.Link href="#action1"><div  className={style.Home} onMouseMove={() => setTable1(3)}> Société <i class="fa-solid fa-angle-down"></i></div></Nav.Link>
        <Nav.Link href="#action1" ><div className={style.Home} onMouseMove={() => setTable1(4)}>Soutien<i class="fa-solid fa-angle-down"></i></div></Nav.Link>
      </Nav>
      <Nav>


      
  <div className={style.drop}>
<Dropdown  onChange={handelLanguge}>
<Dropdown.Toggle className={style.frlang} style={{border:"none",background:"white",color:"grey",marginRight:"10px"}}  >
<img src={fr} value="fr" alt="fr"/> Fra
</Dropdown.Toggle>


<Dropdown.Menu className={style.menu} style={{width:"20px"}} >
    <Dropdown.Item href="#/action-1" value="eng"><img src={en} alt="en"/><span className={style.lang}>Eng</span></Dropdown.Item>
    <Dropdown.Item href="#/action-2" value="por"><img src={pr} alt="en"/><span className={style.lang}>Por</span></Dropdown.Item>
    <Dropdown.Item href="#/action-3" value="spa"><img src={es} alt="es"/><span className={style.lang}>Spa</span></Dropdown.Item>
    <Dropdown.Item href="#/action-4" value="chi"><img src={cn} alt="cn"/><span className={style.lang}>汉语</span></Dropdown.Item>
    <Dropdown.Item href="#/action-5" value="pyc"><img src={ru} alt="cn"/><span className={style.lang}>Рус</span></Dropdown.Item>
    <Dropdown.Item href="#/action-1" value="fr"><img src={fr} alt="en"/><span className={style.lang}>Fra</span></Dropdown.Item>
    <Dropdown.Item href="#/action-7" value="ita"><img src={ita} alt="cn"/><span className={style.lang}>Ita</span></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


 </div> 
      <a type="link" href="#"  className={style.btn}>Connexion</a>
      <Nav eventKey={2} href="#memes">
      <a type="link" href="#"  className={style.btn1}>Commencer</a>
      </Nav>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

{table1===1 &&(<div className={style.navbar} id="navb1">
<div >
<div className='row'>

<div className='col-4'>
<div className={style.cl41}>
<div className={style.img1}></div>

<div className={style.par}>
<h4 className={style.titreI}>Investisseurs</h4>
<p className={style.paragraphe}>Revenu passif sur les stéroïdes</p>
</div>
</div>
</div>

<div className='col-4'>
<div className={style.cl41}>
<div className={style.img2}></div>

<div className={style.par}>
<h4 className={style.titreI}>Stratégies de pointe</h4>
<p className={style.paragraphe}>Choisissez parmi un large éventail de stratégies rentables</p>
</div>
</div>
</div>


<div className='col-4'>
<div className={style.cl41}>
<div className={style.img3}></div>

<div className={style.par}>
<h4 className={style.titreI}>Signaux Crypto</h4>
<p className={style.paragraphe}>Obtenez des informations pertinentes sur les transactions via Telegram</p>
</div>
</div>
</div>

<div className='col-4'>
<div className={style.cl41}>
<div className={style.img4}></div>

<div className={style.par}>
<h4 className={style.titreI}>Crypto Trading Bot</h4>
<p className={style.paragraphe}>Copier une stratégie de trader construite sur un robot de trading de crypto-monnaies</p>
</div>
</div>
</div>

</div>

</div>

</div>
)
}


{table1===2 &&(<div className={style.navbar} >
<div>
<div className='row'>

<div className='col-6'>
<div className={style.cl41}>
<div className={style.img4}></div>

<div className={style.par}>
<h4 className={style.titreI}>À propos de nous</h4>
<p className={style.paragraphe}>Gagnez plus de vos transactions sans augmenter les risques</p>
</div>
</div>
</div>

<div className='col-4'>
<div className={style.cl41}>
<div className={style.img5}></div>

<div className={style.par}>
<h4 className={style.titreI}>Smart Terminal</h4>
<p className={style.paragraphe}>Un terminal de trading avec des fonctionnalités avancées pour les traders développé par Coinmatics</p>
</div>
</div>
</div>

</div>
</div>
</div>

)}






{table1===3 &&(<div className={style.navbar} id="navb2">
<div >
<div className='row'>

<div className='col-4'>
<div className={style.cl41}>
<div className={style.about}></div>

<div className={style.par}>
<h4 className={style.titreI}>Traders</h4>
<p className={style.paragraphe}>Découvrez notre entreprise et notre équipe</p>
</div>
</div>
</div>


<div className='col-4'>
<div className={style.cl41}>
<div className={style.contac}></div>

<div className={style.par}>
<h4 className={style.titreI}>Contacts</h4>

<p className={style.paragraphe}>N'hésitez pas à nous contacter</p>

</div>
</div>
</div>
</div>
</div>
</div>

)}



{table1===4 &&(<div className={style.navbar} id="navb2">
<div>
<div className='row'>

<div className='col-4'>
<div className={style.cl41}>
<div className={style.fag}></div>

<div className={style.par}>
<h4 className={style.titreI}>Base de connaissances</h4>
<p className={style.paragraphe}>Lisez nos guides ou trouvez des réponses aux questions les plus courantes</p>
</div>
</div>
</div>


<div className='col-4'>
<div className={style.cl41}>
<div className={style.asq}></div>

<div className={style.par}>
<h4 className={style.titreI}>Poser une question</h4>

<p className={style.paragraphe}>Nous serons heureux de répondre à toutes vos questions sur nos produits</p>

</div>
</div>
</div>
</div>
</div>
</div>

)}






</div> 
  )
}

export default Navb