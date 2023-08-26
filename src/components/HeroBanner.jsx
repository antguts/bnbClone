import React from "react";
import groupPhoto from '../assets/photoGroup.png'
import '../styles/heroBanner.css'



export default function HeroBanner() {
    return(
        <div className="hero">
            <img src={groupPhoto} />
            <div className="caption">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activites led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </div>
    )
}