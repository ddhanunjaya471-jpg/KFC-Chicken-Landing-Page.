import React from "react";
import './App.css'
import swiggy from "../images/swiggy.webp"
import zomate from "../images/zomato.webp"
import kfc from "../images/kfc_png.webp"


function Hero(){
    return(
        <div className="hero">
        <div className="left">
            <span className="title">TASTE THE BEST KFC CHICKEN.</span>
            <p>KFC (Kentucky Fried Chicken) is a famous global fast-food restaurant chain founded by Colonel Harland Sanders in 1930. It is best known for its signature Original Recipe fried chicken, which is seasoned with a secret blend of 11 herbs and spices. Today, KFC operates over 30,000 outlets in more than 145 countries, serving millions of customers every day.</p>
            <div className="btns">
                <button className="btn1">ORDER NOW</button>
                <button className="btn2">KFC CHICKEN</button>
            </div>
            <div className="social">
                <span className="social-1">Also Avaiable On</span>
                <div className="social-icons">
                    <img src={swiggy} alt="swwigy"></img>
                    <img src={zomate} alt="zomate"></img>
                </div>
            </div>
        </div>
        <div className="right">
            <img src={kfc} alt="kfc"></img>
        </div>
        </div>
        
        
    )
}

export default Hero;