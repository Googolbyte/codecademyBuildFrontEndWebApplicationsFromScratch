class Game {
  constructor (numOfRows, numOfColumns, numOfBombs) {
    this._board = new Board(numOfRows, numOfColumns, numOfBombs);
  }

  playMove (rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    let tile = this._board.playerBoard[rowIndex][columnIndex];
    if (tile === 'B') {
      console.log('Game over.');
      this._board.print(this._playerBoard);
    } else if (!this._board.hasSafeTiles) {
      console.log('You win!');
    } else this._board.print(this._playerBoard);
  }
}

class Board {
  constructor(numOfRows, numOfColumns, numOfBombs) { //be sure to change 'bombs' to numOfBombs
    this._numOfBombs = numOfBombs;
    this._numOfTiles = numOfRows * numOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numOfRows, numOfColumns);
    this._bombBoard = Board.generateBombBoard(numOfRows, numOfColumns, numOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile (rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
      console.log('You landed on a bomb')
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(
      rowIndex, columnIndex);
      this._numOfTiles--;
    }
  }
  getNumberOfNeighborBombs (rowIndex, columnIndex) {
    let neighborOffsets = [ [-1,-1], [-1,0], [-1,1], [0,-1],
                            [0,1], [1,-1], [1,0], [1,1] ];
    //Max number of rows, columns, and a number of bombs variable
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length; //returns the length of the first row
    let numOfBombs = 0;
    //Running code against each neighboring row and column
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      //Making sure the offsets are valid (i.e. making sure they exist in the bombBoard array)
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows &&
          neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
          //Then checking to see that the valid offsets contain a bomb
          if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numOfBombs++; //then incrementing the bomb counter
          }
      }
    });
    return numOfBombs;
    //Code against each neighboring row and column ends here
  }
  hasSafeTiles () {return (this._numOfTiles !== this._numOfBombs);}
  print () {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
    //Log to the console: the 'board' passed into the function, joined with
    //the ' | ', and then joined with a new line.
  }

  static generatePlayerBoard (numOfRows, numOfColumns) {
    let board = [];
    for (let y = 0; y < numOfRows; y++) {
      let row = [];
      for (let x = 0; x < numOfColumns; x++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
    //Returns a 2D array of spaces; the inner 'for' loop creates a
    //single row of spaces, and the outer 'for' loop pushes that
    //row of spaces. Both loops run for as long as the parameters
    //specify, allowing the length and width of the board to be
    //customized.
  }

  static generateBombBoard (numOfRows, numOfColumns, numOfBombs) {
    let board = [];
    for (let y = 0; y < numOfRows; y++) {
      let row = [];
      for (let x = 0; x < numOfColumns; x++) {
        row.push(null);
      }
      board.push(row);
    }//Same code as playerBoard, except it pushes 'null' instead of spaces

  ////////////////////////
  //Random Bomb Code below-----------
  ////////////////////////

    let numberOfBombsPlaced = 0;
    let randomRowIndex;
    let randomColumnIndex;

    while (numberOfBombsPlaced < numOfBombs) {
      randomRowIndex = Math.floor(Math.random() * numOfRows); //numOfRows & numOfColumns sets
      randomColumnIndex = Math.floor(Math.random() * numOfColumns); //the limit of Math.random()
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
    /*A predfined number of 'B' characters were assigned to the same predefined
      number of 'board' indexes. Each index was selected at random, and no more
      than the predefined number of 'B' characters (bombs) can be assigned.*/
  }
}

const x = 3;

const g = new Game(x, x, x);
g.playMove(Math.floor(Math.random() * x), Math.floor(Math.random() * x));
