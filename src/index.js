import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import { names, classes } from './gameData.js';
// import { changeState } from './changeState.js';
// import { storeState } from './storeState.js';

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

window.addEventListener("load", function() {
  document.querySelector("#setup-form").addEventListener("submit", handleSetup);
});