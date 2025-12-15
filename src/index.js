import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import { names, classes, rollCombat } from './gameData.js';
// import { changeState } from './changeState.js';
// import { storeState } from './storeState.js';

// const stateControl = storeState();
let defendState = false;

function applyDmg(dmg, str) {
  if (defendState = true) {
    const updatedHp = parseInt(document.getElementById(str).innerText) - (dmg / 2);
  } else {
    const updatedHp = parseInt(document.getElementById(str).innerText) - dmg;
  }
  // const invertedDmg = dmg * -1;
  // const newState = changeState("hp")(invertedDmg);
  // const updatedHp = stateControl(newState);
  // console.log(updatedHp);
  if (updatedHp <= 0) {
    endGame();
  } else {
    document.getElementById(str).innerText = updatedHp;
  }
}

function handleSetup(e) {
  e.preventDefault();
  const playerName = document.querySelector("#name-input").value;
  if (playerName.trim() === "") {
    return document.querySelector("#error-output").innerText = "Name cannot be empty.";
  }
  const playerClass = parseInt(document.querySelector("#class-select").value);
  document.querySelector("#player-name").innerText = playerName;
  document.querySelector("#player-class").innerText = classes[playerClass].name;

  const randName = Math.floor(Math.random() * 100);
  document.querySelector("#opponent-name").innerText = names[randName];
  const randClass = Math.floor(Math.random() * 4);
  document.querySelector("#opponent-class").innerText = classes[randClass].name;
  
  document.querySelector("#setup-wrapper").classList.add("hidden");
  document.querySelector("#game-content").classList.remove("hidden");
}

function getClasses() {
  const playerClass = parseInt(document.querySelector("#class-select").value);

  const opponentClassName = document.querySelector("#opponent-class").innerText;
  let opponentClass;

  if (opponentClassName === "Warrior") {
    opponentClass = 0;
  } else if (opponentClassName === "Spellsword") {
    opponentClass = 1;
  } else if (opponentClassName === "Archer") {
    opponentClass = 2;
  } else {
    opponentClass = 3;
  }

  const result = [classes[playerClass], classes[opponentClass]];
  return result;
}

function printAction(str) {
  const actionLog = document.getElementById("log-wrapper");
  const actionP = document.createElement("p");
  actionP.innerText = str;
  actionLog.append(actionP);
}

function handleAttack() {
  const classes = getClasses();
  const result = rollCombat(classes[0].atk, classes[1].def);
  applyDmg(result, "player-hp-value");
  printAction(`${result} damage!`);
}

// function handleOpponentTurn() {
//   const actionRoll = rollTen();
//   const critRoll = rollTen();
//   const classes = getClasses();
//   if (actionRoll <= 1) {

//   } else {
//     const result = rollCombat(classes[1], classes[0]);
//   }
// }

// function switchTurns() {
//   document.querySelector("#attack-button").classList.add("hidden");
//   document.querySelector("#defend-button").classList.add("hidden");
//   document.querySelector("#end-turn-button").classList.add("hidden");
//   document.querySelector("#surrender-button").classList.add("hidden");
  
//   setTimeout(1000, handleOpponentTurn);

//   document.querySelector("#attack-button").classList.remove("hidden");
//   document.querySelector("#defend-button").classList.remove("hidden");
//   document.querySelector("#end-turn-button").classList.remove("hidden");
//   document.querySelector("#surrender-button").classList.remove("hidden");
// }

window.addEventListener("load", function() {
  document.querySelector("#setup-form").addEventListener("submit", handleSetup);
  document.querySelector("#attack-button").addEventListener("click", handleAttack);
  // document.querySelector("#defend-button").addEventListener("click", handleDefense);
  // document.querySelector("#end-turn-button").addEventListener("click", handleEndTurn);
  // document.querySelector("#surrender-button").addEventListener("click", handleSurrender);
});