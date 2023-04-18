#!/usr/bin/node

// prints My number: <first argument converted in integer> if the first argument can be converted to an integer
// If the argument can’t be converted to an integer, print “Not a number”

const argument = process.argv;
if (Number(argument[2])) {
  console.log('My number: 89');
} else {
  console.log('Not a number');
}
