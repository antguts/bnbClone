import React from "react";
import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx'
import "../styles/cards.css"



export default function Cards() {

    return (
        <>
            <div className="cards">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )

}