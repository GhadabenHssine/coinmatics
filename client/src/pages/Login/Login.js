import React from 'react'
import { Form } from 'react-bootstrap'
import style from "./Login.module.css"
import logo from "../img/medium.svg"
import googleLogo from "../img/google-logo.svg"
import twitterLogo from "../img/twitter-logo.svg"
import Slider from "react-slick";

const Login = () => {

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

    return (
        <div className={style.login}>
            <div className={style.bloc1}>

                <div className={style.head}>
                    Already have an account?
                    <a href="#" className={style.lien}>Log In</a>
                </div>

<div className={style.blocbody}>
<a href='#' className={style.lienlogo} ><img src={logo} alt=""/></a>
<div className={style.titre}>Create an Account</div>

<Form>
<div className={style.blocInput}>
<label className={style.label1}>
<span>Enter Your Email</span> 
</label>
<label className={style.inputE}>
<input type="email" id="1" placeholder="" className={style.inputtext} name="email"/>
<div className={style.borderinput}></div>
</label>
</div>

<div className={style.blocInput}>
<label className={style.label1}>
<span>Referral ID (Optional)</span> 
</label>
<label className={style.inputE}>
<input type="text" id="1" placeholder="" className={style.inputtext} name="email"/>
<div className={style.borderinput}></div>
</label>
</div>

<div>
<button type="submit" className={style.btn}>Continue</button>
</div>

<div className={style.singup}>
<div className={style.titreSi}>Or Sign Up With</div>
<div className={style.icons}>
<button className={style.btnicon}>
<img src={googleLogo} alt=""/>
</button>
<button className={style.btnicon}>
<img src={twitterLogo} alt=""/>
</button>
</div>
</div>
</Form>
</div>
 </div>


<div className={style.bloc2}>
<Slider {...settings}>
          <div>
            <h3>1jbkkjhjjhlmjljùkxlkjùwùkj</h3>
          </div>
          <div>
            <h3>2ghbjklm;cokxljùl</h3>
          </div>
          
          
        </Slider>


</div>





 </div>
    )
}

export default Login