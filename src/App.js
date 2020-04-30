import React from "react";
import "./App.css";
import Title from "./components/Title/index";
import GameInfo from "./components/GameInfo/index";
import Building from "./components/Building/index";

function App() {
    const [money, setMoney] = React.useState(100);
    const [income, setIncome] = React.useState(1);
    const [isFirstTime, setIsFirstTime] = React.useState(true);
    // const buildings = [{ name: "Farm", owned: 0, cost: 100 }];
    const startMoney = 100;
    // let buildingElements = [];
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

    // ("use strict");

    // const money = document.querySelector(".game__info-money-value");
    // const income = document.querySelector(".game__info-income-value");
    // const farmsOwned = document.querySelector(".farms__owned-value");
    // const farmsCost = document.querySelector(".farms__cost-value");
    // const farmBuyBtn = document.querySelector(".farms__buy-btn");

    // let moneyRealValue = 0;
    // let incomeRealValue = 0;
    // let farmsRealValue = 0;
    // let farmRealCost = 100;
    // const farmIncomeIncrease = 1;
    // const gameDifficultyMultiplier = 1.1;
    // let isFirstTime = true;

    // const gameLoop = () => {
    //     console.log("Real money: " + moneyRealValue);
    //     console.log("Farm current cost: " + farmRealCost);
    //     updateMoney((moneyRealValue += incomeRealValue));
    //     if (moneyRealValue >= farmRealCost) {
    //         setFarmBuyBtnActive();
    //     } else {
    //         setFarmBuyBtnDisabled();
    //     }
    // };

    // functions to update value used in js and value shown in dom
    // const updateMoney = (value) => {
    // moneyRealValue = value;
    // money.textContent = value;
    //     setMoney(value);
    // };

    // const updateIncome = (value) => {
    // incomeRealValue = value;
    // income.textContent = value;
    //     setIncome(value);
    // };

    // const updateFarms = (farmCount, farmCost) => {
    //     farmsRealValue = farmCount;
    // farmsOwned.textContent = farmCount;
    // farmsCost.textContent = farmCost;
    // };

    // const setFarmBuyBtnActive = () => {
    // if (!farmBuyBtn.classList.contains("active-buy-btn")) {
    //     farmBuyBtn.classList.add("active-buy-btn");
    //     farmBuyBtn.classList.remove("disabled-buy-btn");
    //     farmBuyBtn.addEventListener("click", buyFarm);
    // }
    // };

    // const setFarmBuyBtnDisabled = () => {
    // if (!farmBuyBtn.classList.contains("disabled-buy-btn")) {
    //     farmBuyBtn.classList.remove("active-buy-btn");
    //     farmBuyBtn.classList.add("disabled-buy-btn");
    //     farmBuyBtn.removeEventListener("click", buyFarm);
    // }
    // };

    // const buyFarm = () => {
    //     setFarmBuyBtnDisabled();
    //     updateMoney(Math.round((moneyRealValue -= farmRealCost)));
    //     updateIncome(Math.round((incomeRealValue += farmIncomeIncrease)));
    //     farmRealCost = Math.round(farmRealCost * gameDifficultyMultiplier);
    //     updateFarms((farmsRealValue += 1), farmRealCost);
    // };

    const gameStart = () => {
        setMoney(startMoney);
        setIncome(1);
        setIsFirstTime(false);
    };

    // for (let i = 0; i < buildings.length; i++) {
    //     const building = buildings[i];

    //     buildingElements.push(

    // );
    // console.log(buildingElements);
    // }

    // gameStart();
    let buildingsRender = buildings.map((building, key) => (
        <Building
            key={building.id}
            name={building.name}
            owned={building.owned}
            cost={building.cost}
            incomeIncrease={building.incomeIncrease}
            costIncrease={building.costIncrease}
            disabled={building.disabled}
        />
    ));

    React.useEffect(() => {
        if (isFirstTime) {
            console.log("Money: " + money + " Income: " + income);
            console.log(buildings);

            gameStart();
        }

        let gameInterval = setInterval(() => {
            // checks if player has enough money to buy building and activates button if player does
            setBuildings(
                [...buildings].map((building) => {
                    if (building.cost < money) {
                        return {
                            ...building,
                            disabled: false,
                        };
                    } else return building;
                })
            );

            setBuildingElements(buildingsRender);
            setMoney(money + income);
        }, 1000);
        return () => clearInterval(gameInterval);
    }, [money]);

    return (
        <div className="App">
            <Title>Idle Farms</Title>
            <GameInfo currentMoney={money} currentIncome={income} />
            {buildingElements}
        </div>
    );
}

export default App;
