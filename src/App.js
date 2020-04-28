import React from "react";
import "./App.css";
import Title from "./components/Building/index";
import GameBox from "./components/Building/index";
import Building from "./components/Building/index";

function App() {
    return (
        <div className="App">
            <Title>Idle Farms</Title>
            <GameBox currentMoney={money} currentIncome={income} />
            <Building
                name={buildings[i].name}
                owned={buildings[i].owned}
                cost={buildings[i].cost}
            />
        </div>
    );
}

export default App;
