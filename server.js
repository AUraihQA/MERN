console.log("hello");

const cow = require('./cow');
const { startDate } = require('./now.js');

console.log(startDate);
console.log(cow.speak('moo'));
console.log(cow.text);