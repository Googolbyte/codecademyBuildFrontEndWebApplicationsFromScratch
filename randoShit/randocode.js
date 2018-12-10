const data = [];
let aString = typeof data[0];
//The typeof keyword returns a string value representing the name of
//the type of variable it is. If an array element doesn't have a value,
//it is undefined. Since we're testing to see if an array has any
//value, we test the first element, "0".


//In the code below, you can use aString variable instead of
//the typeof if it's easier to read.

if (typeof data[0] === 'undefined'){
  console.log('This is an empty array');
} else {
  console.log('This array contains contents')
}
