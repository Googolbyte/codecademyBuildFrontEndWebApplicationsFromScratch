const countries = ['Japan', 'Denmark', 'Mexico', 'Morocco'];
countries.shift();
console.log(countries);
countries.unshift("Murica");
console.log(countries);
console.log(countries.length);

let twoDeeArray = [
  ['-1a', '0a', '1a'],
  ['-1b',  0,  '1b'],
  ['-1c', '0c', '1c']
];

console.log(twoDeeArray);
console.log(twoDeeArray[1].indexOf('-1'));

let neighborOffsets = [ [-1,-1], [0,-1], [1,-1], [-1,0],
                        [1,0], [-1,1], [0,1], [1,1] ];
