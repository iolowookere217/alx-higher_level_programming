#!/usr/bin/node
// prints the addition of 2 integers
// The first argument is the first integer
// The second argument is the second integer

function add (a, b) {
  return (a + b);
}
const firstNo = parseInt(process.argv[2]);
const secondNo = parseInt(process.argv[3]);
console.log(add(firstNo, secondNo));
