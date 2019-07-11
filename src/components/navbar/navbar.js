import React from "react";
import "./navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <span>Clicky Game</span>
        <span className="msgscr">Guessed Message</span>
        <span className="msgscr">Score: 0 | Top Score: 0</span>
    </nav>
);

export default Navbar;