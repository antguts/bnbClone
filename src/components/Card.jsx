import React from "react";
import katieImg from '../assets/katieImg.png'
import "../styles/card.css"



export default function Card(){
    return(
        <>
        <div id="singleCard">
            <img src={katieImg} />
            <p id="rating">5.0 <span> (6) &bull; USA</span></p>
            <p id="description">Life lessons with Katie Zaferes</p>
            <p id="price"><span>From $136 </span>/ person</p>
        </div>
    </>
    )
}