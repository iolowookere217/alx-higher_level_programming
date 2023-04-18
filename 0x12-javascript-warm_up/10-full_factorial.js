#!/usr/bin/node
// computes and prints a factorial recursively using a function
// The first argument is integer (argument can be cast as integer) used for computing the factorial

function factorial (n) {
  if ((isNaN(n)) || n === 0) {
    return 1;
  } else if (n < 0) {
    return invalid;
  } else {
    return (n * factorial(n - 1));
  }
}
const arg = parseInt(process.argv[2]);
console.log(factorial(arg));
