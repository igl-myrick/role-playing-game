import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import { names, classes, rollCombat } from './gameData.js';
// import { changeState } from './changeState.js';
// import { storeState } from './storeState.js';

// const stateControl = storeState();

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

function applyDmg(dmg, str) {
  const updatedHp = parseInt(document.getElementById(str).innerText) - dmg;
  // const invertedDmg = dmg * -1;
  // const newState = changeState("hp")(invertedDmg);
  // const updatedHp = stateControl(newState);
  // console.log(updatedHp);
  if (updatedHp <= 0) {
    handleGameOver();
  } else {
    document.getElementById(str).innerText = updatedHp;
  }
}

function printAction(str) {
  const actionLog = document.getElementById("log-wrapper");
  const actionP = document.createElement("p");
  actionP.innerText = str;
  actionP.classList.add("action");
  actionLog.append(actionP);
}

function handleAttack() {
  const playerName = document.querySelector("#player-name").innerText;
  const classes = getClasses();
  const result = rollCombat(classes[0].atk, classes[1].def);
  applyDmg(result, "opponent-hp-value");
  printAction(`${playerName} deals ${result} damage!`);
  handleOpponentTurn();
}

function handleOpponentTurn() {
  const opponentName = document.querySelector("#opponent-name").innerText;
  const classes = getClasses();
  const actionRoll = Math.floor(Math.random() * 5);
  if (actionRoll === 0) {
    printAction(`${opponentName} defends!`);
  } else {
    const result = rollCombat(classes[1].atk, classes[0].def);
    applyDmg(result, "player-hp-value");
    printAction(`${opponentName} deals ${result} damage!`);
  }
}

function handleGameOver(winner) {
  document.querySelector("#game-content").classList.add("hidden");
  document.querySelector("#game-over-screen").classList.remove("hidden");
  document.querySelector("#game-over-text").innerText = `${winner} wins!`;
}

function resetGame() {
  document.querySelector("#name-input").value = null;
  document.querySelector("#player-name").innerText = "";
  document.querySelector("#player-class").innerText = "";
  document.querySelector("#player-hp-value").innerText = "100";
  document.querySelector("#opponent-name").innerText = "";
  document.querySelector("#opponent-class").innerText = "";
  document.querySelector("#opponent-hp-value").innerText = "100";

  document.querySelectorAll(".action").forEach(element => element.remove());

  document.querySelector("#game-over-screen").classList.add("hidden");
  document.querySelector("#setup-wrapper").classList.remove("hidden");
}

window.addEventListener("load", function() {
  document.querySelector("#setup-form").addEventListener("submit", handleSetup);
  document.querySelector("#attack-button").addEventListener("click", handleAttack);
  // document.querySelector("#defend-button").addEventListener("click", handleDefense);
  // document.querySelector("#end-turn-button").addEventListener("click", handleEndTurn);
  // document.querySelector("#surrender-button").addEventListener("click", handleSurrender);
  document.querySelector("#reset-button").addEventListener("click", resetGame);
});