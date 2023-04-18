#!/usr/bin/node

// prints a square, The first argument is the size of the square
// if the first argument can’t be converted to an integer, print “Missing size”
// use the character X to print the square

const argument = process.argv;
if (Number(argument[2])) {
  for (let i = 0; i < argument[2]; i++) { console.log('X'.repeat(argument[2])); }
} else {
  console.log('Missing number of occurrences');
}
