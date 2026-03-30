const board = [
    ["", "", "", "", "", "", "", "", ""],
];
let currentPlayer = "X";

function makeMove(index) {
if(board[index] == "" ) {
console.log("invalid move");
} else {
    board[index] = currentPlayer;
    console.log(board);

    if(currentPlayer == "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
     }  

if (
    board[0] === board[1] &&
    board[1] === board[2] &&
    board[0] !== ""
) {
    console.log(currentPlayer + " wins");
}}
}


/*for each combo in winningCombos:
   // get positions a, b, c

    if board[a] === board[b] === board[c]
        and not empty
            win*/

function checkWinner() {
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
}

function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
const combo = winningCombos[i];
const a = combo[0];
const b = combo[1];
const c = combo[2];
if (
    board[a] === board[b] &&
    board[b] === board[c] &&
    board[a] !== ""
) {
    console.log(board[a] + " wins");
} 

    }
}

function makeMove(index) {
    if(board[index] !== "" ) {
        console.log("invalid move");
    } else {
        board[index] = currentPlayer;
        console.log(board);
        checkWinner();

        if(currentPlayer == "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
            }
    }
}
