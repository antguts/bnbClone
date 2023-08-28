import React from "react";
import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx'
import "../styles/cards.css"
import katieImg from '../assets/katieImg.png'




export default function Cards(props) {

    return (
        <>
            <div className="cards">
                <Card 
                    img= {katieImg}
                    description= 'testerTtesting'
                    price= '12'
                    rating= '2'
                />
                <Card 
                    img= {katieImg}
                    description= 'testerTtesting'
                    price= '12'
                    rating= '2'
                />
                <Card 
                    img= {katieImg}
                    description= 'testerTtesting'
                    price= '12'
                    rating= '2'
                />
            </div>
        </>
    )

}