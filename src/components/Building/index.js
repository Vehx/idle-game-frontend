import React from "react";
import "./Building.css";
// import Title from "../Title/index";
// import Button from "../Button/index";

// name owned cost
function Building(props) {
    return (
        <div className="Building">
            <h1>{props.name}</h1>
            <p>
                Owned {props.name}s: {props.owned}
            </p>
            <p>
                Next {props.name} cost: {props.cost}
            </p>
        </div>
    );
}

export default Building;
