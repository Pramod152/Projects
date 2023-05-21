console.log("Welcome to TicTacToe");

let music = new Audio("./music.mp3");
let audioTurn = new Audio("./ting.mp3");
let gameover = new Audio("./gameover.mp3");
let turn = "X";
let isGameover = false;

//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
const resetEverything = () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  boxtexts.forEach((el) => {
    el.innerText = "";
  });
  turn = "X";
  isGameover = false;
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.getElementsByTagName("img")[0].style.width = "0";
  document.querySelector(".line").style.width = "0vw";
};

// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 2, 5, 0, 26],
    [3, 4, 5, 2, 15, 0, 26],
    [6, 7, 8, 2, 25, 0, 26],
    [0, 3, 6, -8, 15, 90, 26],
    [1, 4, 7, 2, 15, 90, 26],
    [2, 5, 8, 12, 15, 90, 26],
    [0, 4, 8, -3, 15, 45, 37],
    [2, 4, 6, -3, 15, 135, 37],
  ];

  wins.forEach((el) => {
    if (
      boxtext[el[0]].innerText === boxtext[el[1]].innerText &&
      boxtext[el[2]].innerText === boxtext[el[1]].innerText &&
      boxtext[el[0]].innerText != ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[el[0]].innerText + "  Won";
      isGameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${el[3]}vw,${el[4]}vw) rotate(${el[5]}deg)`;
      document.querySelector(".line").style.width = `${el[6]}vw`;
      setTimeout(resetEverything, 1000);
    }
  });
};

// Game Logic
let boxes = document.querySelectorAll(".box");
boxes.forEach((el) => {
  let boxtext = el.querySelector(".boxtext");
  el.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameover) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset
reset.addEventListener("click", resetEverything);

if (isGameover === true) {
  resetEverything();
}
