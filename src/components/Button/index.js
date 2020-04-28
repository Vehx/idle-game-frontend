import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
    return (
        <button className={"Button" + (props.disabled ? " disabled" : "")}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    disabled: false,
};

export default Button;
