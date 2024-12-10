<<<<<<< HEAD
let box = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    console.log("boxes was clicked");
    if (turnO) {
      boxes.innerText = "X";
      turnO = false;
    } else {
      boxes.innerText = "O";
      turnO = true;
    }

    boxes.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let Box of box) {
    Box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let Box of box) {
    Box.disabled = false;
    Box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner !!", pos1);
        showWinner(pos1);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
=======
let box = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

box.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    console.log("boxes was clicked");
    if (turnO) {
      boxes.innerText = "X";
      turnO = false;
    } else {
      boxes.innerText = "O";
      turnO = true;
    }

    boxes.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let Box of box) {
    Box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let Box of box) {
    Box.disabled = false;
    Box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation Buddy, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner !!", pos1);
        showWinner(pos1);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
>>>>>>> 1e4f6ef (responsive for all devices)
