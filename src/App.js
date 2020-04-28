import React from "react";
import "./App.css";
// import Title from "./components/Title/index";
// import GameBox from "./components/GameBox/index";
import Building from "./components/Building/index";

function App() {
    // let money = 100;
    // let income = 0;
    const buildings = [{ name: "Farm", owned: 0, cost: 100 }];

    return (
        <div className="App">
            {/* <Title>Idle Farms</Title> */}
            {/* <GameBox currentMoney={money} currentIncome={income} /> */}
            <Building
                name={buildings[0].name}
                owned={buildings[0].owned}
                cost={buildings[0].cost}
            />
        </div>
    );
}

export default App;
