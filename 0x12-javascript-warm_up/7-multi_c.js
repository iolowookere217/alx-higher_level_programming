#!/usr/bin/node

// prints My number: <first argument converted in integer> if the first argument can be converted to an integer
// If the argument can’t be converted to an integer, print “Not a number”

const argument = process.argv;
if (Number(argument[2])) {
  for (let i = 0; i < argument[2]; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
