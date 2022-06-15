import React ,{useState}from 'react'
import style from "./comercant.module.css"

const AccordionD = ({question,answer,id}) => {

  const[text,setText]=useState(false);
 
  const display=()=>{
      setText(!text);
  }
  return (
    <>



        
<div className={style.question}>
<h1 className={style.TitreQes}>{question}</h1>
<p className={style.paragrapheAco} onClick={display} >{text?<i  className="fas fa-sort-up"></i>:<i className= "fas fa-sort-down"></i>}</p>
</div>

<div className={style.answers}>
{text&& <p>{answer}</p>}
</div>


    </>
  )
}

export default AccordionD