import React from "react";
import "./Title.css";

function Title(props) {
    return (
        <div className="Title">
            <h1 className="Title-text">{props.children}</h1>
        </div>
    );
}

export default Title;
