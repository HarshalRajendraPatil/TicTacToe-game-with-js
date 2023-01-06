const allBox = document.querySelectorAll(".inputBox");
const board = document.querySelector(".board");
const reset = document.querySelector("button");
const Turn = document.querySelector(".turn");
const Box1 = document.getElementById("box1");
const Box2 = document.getElementById("box2");
const Box3 = document.getElementById("box3");
const Box4 = document.getElementById("box4");
const Box5 = document.getElementById("box5");
const Box6 = document.getElementById("box6");
const Box7 = document.getElementById("box7");
const Box8 = document.getElementById("box8");
const Box9 = document.getElementById("box9");
const check = document.querySelector(".check");
const winner = document.querySelector(".winner");

let currentPlayer = "X";
let events;
let isPlaying = true;

const changePlayer = function () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  Turn.textContent = `Turn for ${currentPlayer}`;
};

const checkWinner = function () {
  let play = currentPlayer;
  //Layer 1
  if (
    Box1.classList.contains(`add${currentPlayer}`) &&
    Box2.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box3.classList.contains(`addX`) &&
    !Box3.classList.contains("addO")
  ) {
    Box3.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box1.classList.contains(`add${currentPlayer}`) &&
    Box3.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box2.classList.contains(`addX`) &&
    !Box2.classList.contains("addO")
  ) {
    Box2.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box2.classList.contains(`add${currentPlayer}`) &&
    Box3.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box1.classList.contains(`addX`) &&
    !Box1.classList.contains("addO")
  ) {
    Box1.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }

  //Layer 2
  if (
    Box4.classList.contains(`add${currentPlayer}`) &&
    Box5.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box6.classList.contains(`addX`) &&
    !Box6.classList.contains("addO")
  ) {
    Box6.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box4.classList.contains(`add${currentPlayer}`) &&
    Box6.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box5.classList.contains(`addX`) &&
    !Box5.classList.contains("addO")
  ) {
    Box5.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box6.classList.contains(`add${currentPlayer}`) &&
    Box5.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box4.classList.contains(`addX`) &&
    !Box4.classList.contains("addO")
  ) {
    Box4.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }

  //Layer 3
  if (
    Box7.classList.contains(`add${currentPlayer}`) &&
    Box8.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box9.classList.contains(`addX`) &&
    !Box9.classList.contains("addO")
  ) {
    Box9.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box7.classList.contains(`add${currentPlayer}`) &&
    Box9.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box8.classList.contains(`addX`) &&
    !Box8.classList.contains("addO")
  ) {
    Box8.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box8.classList.contains(`add${currentPlayer}`) &&
    Box9.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box7.classList.contains(`addX`) &&
    !Box7.classList.contains("addO")
  ) {
    Box7.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }

  //Layer 3
  if (
    Box1.classList.contains(`add${currentPlayer}`) &&
    Box4.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box7.classList.contains(`addX`) &&
    !Box7.classList.contains("addO")
  ) {
    Box7.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box1.classList.contains(`add${currentPlayer}`) &&
    Box7.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box7.classList.contains(`addX`) &&
    !Box7.classList.contains("addO")
  ) {
    Box7.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box4.classList.contains(`add${currentPlayer}`) &&
    Box7.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box1.classList.contains(`addX`) &&
    !Box1.classList.contains("addO")
  ) {
    Box1.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }

  //Layer 3
  if (
    Box2.classList.contains(`add${currentPlayer}`) &&
    Box5.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box8.classList.contains(`addX`) &&
    !Box8.classList.contains("addO")
  ) {
    Box8.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box2.classList.contains(`add${currentPlayer}`) &&
    Box8.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box5.classList.contains(`addX`) &&
    !Box5.classList.contains("addO")
  ) {
    Box5.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box5.classList.contains(`add${currentPlayer}`) &&
    Box8.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box2.classList.contains(`addX`) &&
    !Box2.classList.contains("addO")
  ) {
    Box2.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }

  //Layer 3
  if (
    Box3.classList.contains(`add${currentPlayer}`) &&
    Box6.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box9.classList.contains(`addX`) &&
    !Box9.classList.contains("addO")
  ) {
    Box9.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box3.classList.contains(`add${currentPlayer}`) &&
    Box9.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box6.classList.contains(`addX`) &&
    !Box6.classList.contains("addO")
  ) {
    Box6.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box6.classList.contains(`add${currentPlayer}`) &&
    Box9.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box3.classList.contains(`addX`) &&
    !Box3.classList.contains("addO")
  ) {
    Box3.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }

  // 1st cross layer
  if (
    Box1.classList.contains(`add${currentPlayer}`) &&
    Box5.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box9.classList.contains(`addX`) &&
    !Box9.classList.contains("addO")
  ) {
    Box9.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box1.classList.contains(`add${currentPlayer}`) &&
    Box9.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box5.classList.contains(`addX`) &&
    !Box5.classList.contains("addO")
  ) {
    Box5.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box5.classList.contains(`add${currentPlayer}`) &&
    Box9.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box1.classList.contains(`addX`) &&
    !Box1.classList.contains("addO")
  ) {
    Box1.classList.add(`add${play}`);
    isPlaying = false;
  }

  // 2nd cross Layer
  if (
    Box3.classList.contains(`add${currentPlayer}`) &&
    Box5.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box7.classList.contains(`addX`) &&
    !Box7.classList.contains("addO")
  ) {
    Box7.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box3.classList.contains(`add${currentPlayer}`) &&
    Box7.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box5.classList.contains(`addX`) &&
    !Box5.classList.contains("addO")
  ) {
    Box5.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  if (
    Box5.classList.contains(`add${currentPlayer}`) &&
    Box7.classList.contains(`add${currentPlayer}`) &&
    currentPlayer == play &&
    !Box3.classList.contains(`addX`) &&
    !Box3.classList.contains("addO")
  ) {
    Box3.classList.add(`add${play}`);
    isPlaying = false;
    return false;
  }
  ///
  else {
    return true;
  }
};

board.addEventListener("click", function (e) {
  if (checkWinner()) {
    if (e.target.classList.contains("inputBox") && isPlaying) {
      e.target.classList.add(`add${currentPlayer}`);
      changePlayer();
    }
  } else {
    board.classList.add("hidden");
    winner.classList.remove("hidden");
    winner.innerHTML = `${currentPlayer} won the game.<br />Press "reset" to play again.`;
  }
});

reset.addEventListener("click", function () {
  allBox.forEach(function (box) {
    box.classList.remove(`addX`);
    box.classList.remove(`addO`);
  });
  Turn.textContent = "Turn for X";
  currentPlayer = "X";
  isPlaying = true;
  board.classList.remove("hidden");
  winner.classList.add("hidden");
});
