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

    checkWinner();

    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];

        if (
            board[a] === board[b] &&
            board[b] === board[c] &&
            board[a] !== ""
        ) {
            console.log(board[a] + " wins");
            gameOver = true;
            return;
        }
    }
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

document.getElementById("status").textContent = board[a] + " wins!";