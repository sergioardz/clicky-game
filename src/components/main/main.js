import React from "react";
import "./main.css";

const Main = props => (
        <div className="card" onClick={props.imageClick}>
            <div className="img-container">
                <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} width={"220px"} height={"150px"}/>
            </div>
        </div>
);

export default Main;