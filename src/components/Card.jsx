import React from "react";
import katieImg from '../assets/katieImg.png'
import "../styles/card.css"



export default function Card(props){
    return(
        <>
        <div id="singleCard">
            <img src={props.img} />
            <p id="rating">{props.rating}</p>
            <p id="description">{props.description}</p>
            <p id="price">{props.price}</p>
        </div>
    </>
    )
}