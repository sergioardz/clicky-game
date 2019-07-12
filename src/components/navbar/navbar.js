import React from "react";
import "./navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <span>Clicky Game</span>
        <span 
            className={props.message.indexOf('Sorry!') !== -1 ? 
            "desc-incorrect" : 
            props.message.indexOf('Nice', 'Good') !== -1 ?
            "desc-correct" :
            "desc-normal"} id="msg"
        >
            {props.message}
        </span>
        <span id="scr">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
);

export default Navbar;