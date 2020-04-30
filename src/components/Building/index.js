import React from "react";
import PropTypes from "prop-types";
import "./Building.css";
import Button from "../Button";

// name owned cost
function Building(props) {
    return (
        <div className="Building">
            <h1>{props.name}</h1>
            <p className="Building__owned">
                Owned {props.name}s: {props.owned}
            </p>
            <p className="Building__cost">
                Next {props.name} cost: {props.cost}
            </p>
            <Button
                disabled={props.disabled ? true : false}
                handleClick={props.handleClick}
            >
                Buy
            </Button>
        </div>
    );
}

Building.propTypes = {
    name: PropTypes.string,
    owned: PropTypes.number,
    cost: PropTypes.number,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
};

Building.defaultProps = {
    name: "Building",
    owned: 0,
    cost: 0,
};

export default Building;
