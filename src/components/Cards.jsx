import React from "react";
import katieImg from '../assets/katieImg.png'
import "../styles/cards.css"

export default function Cards() {
    return (
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