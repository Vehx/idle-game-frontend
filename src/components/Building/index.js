import React from "react";
import "./Building.css";
import Button from "../Button";

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
            <Button disabled={props.disabled ? true : false}>Buy</Button>
        </div>
    );
}

export default Building;
