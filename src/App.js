import React from "react";
import "./App.css";
import Title from "./components/Title/index";
import GameInfo from "./components/GameInfo/index";
import Building from "./components/Building/index";

function App() {
    const [money, setMoney] = React.useState(100);
    const [income, setIncome] = React.useState(0);
    const buildings = [{ name: "Farm", owned: 0, cost: 100 }];

    React.useEffect(() => {});

    return (
        <div className="App">
            <Title>Idle Farms</Title>
            <GameInfo currentMoney={money} currentIncome={income} />
            <Building
                name={buildings[0].name}
                owned={buildings[0].owned}
                cost={buildings[0].cost}
                // TODO change this to a bool var when logic is implemented
                disabled={true}
            />
        </div>
    );
}

export default App;
