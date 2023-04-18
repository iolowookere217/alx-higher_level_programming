#!/usr/bin/node

// prints two arguments passed to it, in the following format: “ is ”

const argument = process.argv;
if (argument.length === 2) {
  console.log('undefined' + ' is ' + 'undefined');
} else if (argument.length === 3) {
  console.log(argument[2] + ' is ' + 'undefined');
} else { console.log(argument[2] + ' is ' + argument[3]); }
