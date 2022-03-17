import React from "react";
import {useState} from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {FaBuromobelexperte} from "react-icons/fa"
import {BiMessageSquareDetail} from "react-icons/bi"


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><BiBook /></a>
            <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><FaBuromobelexperte /></a>
            <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav;