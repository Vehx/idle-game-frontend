import React from "react";
import PropTypes from "prop-types";
import "./GameInfo.css";

function GameInfo(props) {
    return (
        <div className="GameInfo">
            <h2 className="GameInfo__name">{props.playerName}'s Info</h2>
            <p className="GameInfo__money">Money: {props.currentMoney}</p>
            <p className="GameInfo__income">Income: {props.currentIncome}/s</p>
        </div>
    );
}

GameInfo.propTypes = {
    playerName: PropTypes.string,
    currentMoney: PropTypes.number,
    currentIncome: PropTypes.number,
};

GameInfo.defaultProps = {
    playerName: "Player",
    currentMoney: 0,
    currentIncome: 0,
};

export default GameInfo;
