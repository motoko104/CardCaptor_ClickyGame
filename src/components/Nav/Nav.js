import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="titleSpace">
                <a href="/clicky-game/">{props.title}</a>
            </li>
            <li id="msg">{props.message}</li>
            <li id="scr">あなたのスコア: {props.score}</li>
            <li id="top-scr">トップスコア: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;