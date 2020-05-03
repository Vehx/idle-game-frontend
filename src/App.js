import React from "react";
import "./App.css";
import Title from "./components/Title/index";
import GameInfo from "./components/GameInfo/index";
import Building from "./components/Building/index";

function App() {
    // start values, change to speed up testing :)
    const startMoney = 100;
    const startIncome = 0;
    const apiUrl = "http://localhost:5000/player/2";

    const [money, setMoney] = React.useState(100);
    const [income, setIncome] = React.useState(1);
    const [isFirstTime, setIsFirstTime] = React.useState(true);
    const [buildingElements, setBuildingElements] = React.useState([]);
    const [buildings, setBuildings] = React.useState([
        {
            id: 0,
            name: "Farm",
            owned: 0,
            cost: 100,
            incomeIncrease: 1,
            costIncrease: 1.2,
            disabled: true,
        },
        {
            id: 1,
            name: "Barn",
            owned: 0,
            cost: 1000,
            incomeIncrease: 3,
            costIncrease: 1.2,
            disabled: true,
        },
    ]);

    const buyBuilding = (id) => {
        setBuildings(
            [...buildings].map((building) => {
                if (building.id === id && building.cost <= money) {
                    setIncome(income + building.incomeIncrease);
                    setMoney(money - building.cost);
                    return {
                        ...building,
                        owned: (building.owned += 1),
                        cost: Math.floor(building.cost * building.costIncrease),
                        disabled: true,
                    };
                } else return building;
            })
        );
    };

    const gameStart = () => {
        setMoney(startMoney);
        setIncome(startIncome);
        setIsFirstTime(false);

        // test api
        GetInfo();
    };

    // what incoming json will look like in get request
    // {
    //     "data": {
    //         "id": 2,
    //         "name": "Tester2",
    //         "money": 7309,
    //         "income": 1,
    //         "buildings": [
    //             {
    //                 "id": 0,
    //                 "name": "Farm",
    //                 "owned": 0,
    //                 "cost": 100,
    //                 "incomeIncrease": 1,
    //                 "costIncrease": 1.2,
    //                 "upgrade": 500
    //             }
    //         ]
    //     },
    //     "success": true,
    //     "message": null
    // }

    const GetInfo = () => {
        fetch(apiUrl, {
            method: "get",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            // referrerPolicy: "no-referrer",
        })
            .then((r) => r.json())
            .then((r) => {
                // let player = r.data;
                console.log(r);
            });
    };

    // template for put request when buying building
    // {
    //     "id": 2,
    //     "buildingId": 0
    // }

    // template for setBuildingElements to use when rendering buildings
    const buildingsRender = buildings.map((building, key) => (
        <Building
            key={building.id}
            name={building.name}
            owned={building.owned}
            cost={building.cost}
            incomeIncrease={building.incomeIncrease}
            costIncrease={building.costIncrease}
            disabled={building.disabled}
            handleClick={() => {
                buyBuilding(building.id);
            }}
        />
    ));

    React.useEffect(() => {
        // sets start values for game on load
        if (isFirstTime) gameStart();

        // game loop, this is where the magic happens
        let gameInterval = setInterval(() => {
            // checks if player has enough money to buy building and activates button if player does
            setBuildings(
                [...buildings].map((building) => {
                    if (building.cost <= money) {
                        return {
                            ...building,
                            disabled: false,
                        };
                    } else
                        return {
                            ...building,
                            disabled: true,
                        };
                })
            );

            setMoney(money + income);
            setBuildingElements(buildingsRender);
        }, 1000);
        return () => clearInterval(gameInterval);
    }, [money, income, buildings, buildingsRender, isFirstTime]);

    return (
        <div className="App">
            <Title>Idle Farms</Title>
            <GameInfo
                playerName={"MakeVariable"}
                currentMoney={money}
                currentIncome={income}
            />
            {buildingElements}
        </div>
    );
}

export default App;
