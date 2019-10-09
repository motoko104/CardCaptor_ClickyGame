import React from "react";
import "./Card.css";

const Card = props => (
    <div
        className="card"
        value={props.id}
        onClick={() => props.handleClicked(props.id)}
    >
        <div className="image-spot">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Card;