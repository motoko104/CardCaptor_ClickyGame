import React from "react";
import "./CardArea.css";

const CardArea = props => (
    <div className="cardArea">{props.children}</div>
);

export default CardArea;