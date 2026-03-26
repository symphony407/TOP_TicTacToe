const board = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
];
let currentPlayer = "X";

function makeMove(index) {
if(board[index] == " " ) {
console.log("invalid move");
} else {
    board[index] = currentPlayer;
}

}