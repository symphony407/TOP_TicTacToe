// Game state
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;


const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function makeMove(index) {
    if (gameOver) return;

    if (board[index] !== "") {
        console.log("Invalid move");
        return;
    }

    board[index] = currentPlayer;

    if (checkWinner()) return;

if (checkDraw()) {
    document.getElementById("status").textContent = "It's a draw!";
    gameOver = true;
    return;
}

// switch player ONLY if game continues
currentPlayer = currentPlayer === "X" ? "O" : "X";

document.getElementById("status").textContent =
    "Current Player: " + currentPlayer;
    document.getElementById("status").textContent = 
    "Current Player: " + currentPlayer;
}

function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];

        if (
            board[a] === board[b] &&
            board[b] === board[c] &&
            board[a] !== ""
        ) {
            document.getElementById("status").textContent = board[a] + " wins!";
            gameOver = true;
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");

        if (board[index] !== "" || gameOver) return;

        makeMove(index);

        cell.textContent = board[index];
    });
});

document.getElementById("restart").addEventListener("click", () => {
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
    }

    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
    });

    currentPlayer = "X";
    gameOver = false;

    document.getElementById("status").textContent = "Current Player: X";
});