#!/usr/bin/node

// prints My number: <first argument converted in integer> if the first argument can be converted to an integer
// If the argument can’t be converted to an integer, print “Not a number”

const argument = process.argv;
if (isNaN(argument[2])) {
  console.log('Not a number');
} else {
  console.log('My number: ' + parseInt(argument[2]));
}
