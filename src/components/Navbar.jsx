import React from "react";
import '../styles/navbar.css'
import bnbLogo from '../assets/abbLogo.svg'


export default function Navbar() {
    return(
        <div className="navigation">
            <nav>
                <img src={bnbLogo} />
            </nav>
        </div>

    )
}