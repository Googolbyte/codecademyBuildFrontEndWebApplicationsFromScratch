class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut (bool) {
    if(typeof bool === 'bool') {
    	this._isCheckedOut = bool;
     } else console.log("Enter only 'true' or 'false'");
  }

  getAverageRating() {
    const arrSum = this._ratings.reduce((a,b) => a + b, 0); //sums the array elements
    return Math.fround((arrSum / this._ratings.length));		//return the average
  }

  toggleCheckOutStatus() {
    if (this._isCheckedOut) {
      this._isCheckedOut = false;
    } else this._isCheckedOut = true;
  }

  addRating(r) {
    if (typeof r === 'number' && r >= 1 && r <=5){
    	this._ratings.push(r);
    } else console.log('Enter a number between 1 and 5');
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }

}

class Movie extends Media {
  constructor(title, director, runTime ) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }

}

class CD {

}

let historyOfEverything =
    new Book('Bill Bryson', 'A Short History of Nearly Everything', '544');
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

let speed = new Movie('Jan de Bont', 'Speed', '116');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
