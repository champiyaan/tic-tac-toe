let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

let isGameActive = true;

const squares = document.querySelectorAll(".square");
const restartButton = document.getElementById("restartButton");

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleValidation = () => {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winningCondition = winningConditions[i];
    let a = board[winningCondition[0]];
    let b = board[winningCondition[1]];
    let c = board[winningCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    isGameActive = false;
    alert(`Player ${currentPlayer} has won!`);
    return;
  }
  if (!board.includes("")) {
    isGameActive = false;
    alert("Game is a draw!");
  }
};

const handleSquareClick = (e) => {
  const clickedSquare = e.target;
  const clickedSquareIndex = parseInt(
    clickedSquare.getAttribute("id").replace("square", "")
  );

  if (board[clickedSquareIndex] !== "" || !isGameActive) {
    return;
  }

  board[clickedSquareIndex] = currentPlayer;
  clickedSquare.textContent = currentPlayer;

  handleValidation();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

const handleRestartGame = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "x";

  squares.forEach((square) => {
    square.textContent = "";
  });
};

squares.forEach((square) =>
  square.addEventListener("click", handleSquareClick)
);
restartButton.addEventListener("click", handleRestartGame);
