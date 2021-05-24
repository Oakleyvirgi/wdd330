const player1 = "X";
const player2 = "O";
let current_player = player1;
const board = document.querySelector(".game_grid");
const squares = document.querySelectorAll(".cell");

//EVENT LISTENER...DID THE PLAYER CLICK?

function playerPlayed(e) {
    if (e.target.innerHTML == "") {
        e.target.innerHTML = current_player;
        if (current_player === player1) {
            current_player = player2;
        } else {
            current_player = player1;
        }
    }
    checkWin();
    message();
}

board.addEventListener("click", playerPlayed);

//Message to tell who's turn it is
function message() {
  msg = document.querySelector("h3").textContent =
    "It's " + `${current_player}` + "'s" + " turn.";
}

//Resetting The Board
function reset() {
  document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
  document.querySelector("h2").innerHTML = "";
  document.querySelector("h3").classList.remove("no_display");
  count = 0;
}


function checkWin() {
  let win1 = document.querySelector("#a");
  let win2 = document.querySelector("#b");
  let win3 = document.querySelector("#c");
  let win4 = document.querySelector("#d");
  let win5 = document.querySelector("#e");
  let win6 = document.querySelector("#f");
  let win7 = document.querySelector("#g");
  let win8 = document.querySelector("#h");
  let win9 = document.querySelector("#i");


  if (
    (win1.textContent.includes("X") &&
      win2.textContent.includes("X") &&
      win3.textContent.includes("X")) ||
    (win1.textContent.includes("X") &&
      win4.textContent.includes("X") &&
      win7.textContent.includes("X")) ||
    (win2.textContent.includes("X") &&
      win5.textContent.includes("X") &&
      win8.textContent.includes("X")) ||
    (win3.textContent.includes("X") &&
      win6.textContent.includes("X") &&
      win9.textContent.includes("X")) ||
    (win4.textContent.includes("X") &&
      win5.textContent.includes("X") &&
      win6.textContent.includes("X")) ||
    (win7.textContent.includes("X") &&
      win8.textContent.includes("X") &&
      win9.textContent.includes("X")) ||
    (win3.textContent.includes("X") &&
      win5.textContent.includes("X") &&
      win7.textContent.includes("X")) ||
    (win1.textContent.includes("X") &&
      win5.textContent.includes("X") &&
      win9.textContent.includes("X"))
  ) {
    document.querySelector("h2").innerHTML = `Player X has won!`;
    document.querySelector("h3").classList.add("no_display");
    setTimeout(() => {  reset(); }, 3000);
    return;
    } else if (
    (win1.textContent.includes("O") &&
      win2.textContent.includes("O") &&
      win3.textContent.includes("O")) ||
    (win1.textContent.includes("O") &&
      win4.textContent.includes("O") &&
      win7.textContent.includes("O")) ||
    (win2.textContent.includes("O") &&
      win5.textContent.includes("O") &&
      win8.textContent.includes("O")) ||
    (win3.textContent.includes("O") &&
      win6.textContent.includes("O") &&
      win9.textContent.includes("O")) ||
    (win4.textContent.includes("O") &&
      win5.textContent.includes("O") &&
      win6.textContent.includes("O")) ||
    (win7.textContent.includes("O") &&
      win8.textContent.includes("O") &&
      win9.textContent.includes("O")) ||
    (win3.textContent.includes("O") &&
      win5.textContent.includes("O") &&
      win7.textContent.includes("O")) ||
    (win1.textContent.includes("O") &&
      win5.textContent.includes("O") &&
      win9.textContent.includes("O"))
  ) {
    document.querySelector("h2").innerHTML = `Player O has won!`;
    document.querySelector("h3").classList.add("no_display");
    setTimeout(() => {  reset(); }, 3000);
    return;
  } else {
    isDraw();
  }
}
 

let tie_game = Array.from(squares);
let count = 0;

function isDraw() {
  for (i = 0; i < tie_game.length; i++) {
    if (squares[i].innerHTML == "X" || "O") {
      count++;
      if (count == 81) {
        document.querySelector("h2").innerHTML = `It's a draw`;
        document.querySelector("h3").classList.add("no_display");
        setTimeout(() => {  reset(); }, 3000);
      }
    }
  }
}