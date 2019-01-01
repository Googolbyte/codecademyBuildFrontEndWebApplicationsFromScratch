//Generates a player board-------------
//////////////////////////

const generatePlayerBoard = (numOfRows, numOfColumns) => {
  board = [];
  for (let y = 0; y < numOfRows; y++) {
    let row = [];
    for (let x = 0; x < numOfColumns; x++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board; //Returns a 2D array of spaces; the inner 'for' loop creates a
};              //single row of spaces, and the outer 'for' loop pushes that
                //row of spaces. Both loops run for as long as the parameters
                //specify, allowing the length and width of the board to be
                //customized.

////////////////////////
//Generates a bomb board--------------
////////////////////////

const generateBombBoard = (numOfRows, numOfColumns, bombs) => {
  board = [];
  for (let y = 0; y < numOfRows; y++) {
    let row = [];
    for (let x = 0; x < numOfColumns; x++) {
      row.push(null);
    }
    board.push(row);
  }//Same code as above, except it pushes 'null' instead of spaces

////////////////////////
//Random Bomb Code below-----------
////////////////////////

  let numberOfBombsPlaced = 0;
  let randomRowIndex;
  let randomColumnIndex;

  while (numberOfBombsPlaced < bombs) { //numOfRows & numOfColumns sets the limit of Math.random()
    randomRowIndex = Math.floor(Math.random() * numOfRows);
    randomColumnIndex = Math.floor(Math.random() * numOfColumns);
    if (board[randomRowIndex][randomColumnIndex] === 'B') {
      //Do nothing
    } else {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
  /*A predfined number of 'B' characters were assigned to the same predefined
    number of 'board' indexes. Each index was selected at random, and no more
    than the predefined number of 'B' characters (bombs) can be assigned.*/
}

////////////////////////
//Checks adjacent tiles for bombs
////////////////////////

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let neighborOffsets = [ [-1,-1], [-1,0], [-1,1], [0,-1],
                          [0,1], [1,-1], [1,0], [1,1] ];
  //Max number of rows, columns, and a number of bombs variable
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length; //returns the length of the first row
  let numberOfBombs = 0;
  //Running code against each neighboring row and column
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    //Making sure the offsets are valid (i.e. making sure they exist in the bombBoard array)
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        //Then checking to see that the valid offsets contain a bomb
        if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++; //then incrementing the bomb counter
        }
    }
  });
  return numberOfBombs;
  //Code against each neighboring row and column ends here
}

////////////////////////
//Flips a tile on the player board
////////////////////////

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) =>  {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] === 'B';
    console.log('You landed on a bomb')
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,
    rowIndex, columnIndex);
  }
}

////////////////////////
//Prints the board
////////////////////////

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
  //Log to the console: the 'board' passed into the function, joined with
  //the ' | ', and then joined with a new line.
}

//////////////////
//Testing the code
//////////////////

let playerBoard = generatePlayerBoard(3, 3);
let bombBoard = generateBombBoard(3, 3, 1);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 1, 1);
console.log('Updated Player Board: ');
printBoard(playerBoard);
