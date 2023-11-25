"use strict";

let activePlayer1 = document.querySelector(".active-1");
console.log(activePlayer1);

let activePlayer2 = document.querySelector(".active-2");
console.log(activePlayer2);
let newGame = document.querySelector(".new-game");
console.log(newGame);
let rollDice = document.querySelector(".roll-dice");
console.log(rollDice);
let hold = document.querySelector(".hold");
console.log(hold);
let currentScore1 = document.querySelector(".current-score1");
console.log(currentScore1);
let currentScore2 = document.querySelector(".current-score2");
console.log(currentScore2);
let highScore1 = document.querySelector(".high-score1");
console.log(highScore1);
let highScore2 = document.querySelector(".high-score2");
console.log(highScore2);
let diceImage = document.querySelector(".hidden");
let score1 = 0;
let score2 = 0;
let activePlayer = 0;
let scores = new Array(score1, score2);
let currentScores = new Array(currentScore1, currentScore2);
let highScores = new Array(highScore1, highScore2);

rollDice.addEventListener("click", function () {
  let rolledNum = Math.trunc(Math.random() * 6) + 1;
  console.log(rolledNum);

  if (activePlayer === 0) {
    if (rolledNum !== 1) {
      score1 = score1 + rolledNum;
      diceImage.src = `images/dice-${rolledNum}.png`;
      currentScores[0].textContent = score1;
      scores[0] = score1;
      console.log(scores);
      hold.addEventListener("click", function () {
        highScore1.textContent = score1;
        document.querySelector(".hidden").style.display = "block";
        document.querySelector("#p-1").style.backgroundColor = "#b16c88";
        document.querySelector("#p-2").style.backgroundColor = "#cc9faf";
        activePlayer = 1;
      });
      if (score1 >= 50) {
        document.querySelector(".hidden").style.display = "none";
        document.querySelector(".active-1 h2").textContent = "WINNER🎉🎉";
        document.querySelector(".active-2 h2").textContent = "YOU LOST 👎 ";
        highScore1.textContent = score1;
      }
    } else {
      diceImage.src = `images/dice-${rolledNum}.png`;
      currentScores[0].textContent = 0;
      score1 = 0;
      highScore1.textContent = 0;
      // document.querySelector(".hidden").style.display = "none";
      document.querySelector("#p-1").style.backgroundColor = "#b16c88";
      document.querySelector("#p-2").style.backgroundColor = "#cc9faf";
      activePlayer = 1;
    }
  } else {
    if (rolledNum !== 1) {
      score2 = score2 + rolledNum;
      diceImage.src = `images/dice-${rolledNum}.png`;
      currentScores[1].textContent = score2;
      scores[1] = score2;
      console.log(scores);
      hold.addEventListener("click", function () {
        highScore2.textContent = score2;
        document.querySelector(".hidden").style.display = "block";
        document.querySelector("#p-2").style.backgroundColor = "#b16c88";
        document.querySelector("#p-1").style.backgroundColor = "#cc9faf";
        activePlayer = 0;
      });
      if (score2 >= 50) {
        highScore2.textContent = score2;
        document.querySelector(".active-2 h2").textContent = "WINNER🎉🎉";
        document.querySelector(".active-1 h2").textContent = "YOU LOST 👎 ";
      }
    } else {
      score2 = 0;
      currentScores[1].textContent = 0;
      highScore2.textContent = 0;
      document.querySelector("#p-2").style.backgroundColor = "#b16c88";
      document.querySelector("#p-1").style.backgroundColor = "#cc9faf";
      activePlayer = 0;
    }
  }
});

newGame.addEventListener("click", function () {
  document.querySelector("#p-2").style.backgroundColor = "#b16c88";
  document.querySelector("#p-1").style.backgroundColor = "#cc9faf";
  activePlayer = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  highScore1.textContent = 0;
  highScore2.textContent = 0;
  score1 = 0;
  score2 = 0;
  // document.querySelector(".hidden").style.display = "none";
  document.querySelector(".active-1 h2").textContent = "PLAYER 1";
  document.querySelector(".active-2 h2").textContent = "PLAYER 2";
});
