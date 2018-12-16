//Prints the board in an arrow function

var testArray = [[1], [2, 3]];
//console.log(testArray[1]);

var board =
[// Start of array
  [' ', ' ', ' '], //Row 1
  [' ', ' ', ' '], //Row 2
  [' ', ' ', ' ']  //Row 3
];// End of array

//// DEBUG:
//console.log(board[0].join(' | '));

//Joining elements of each row with a | seperator
const printBoard = (board) => {
  console.log('Current Board:');
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
}

//Printing results
printBoard(board);

//Editing elements of board
board[0][1] = 'B';
board[2][2] = 1;

//Printing results
printBoard(board);
