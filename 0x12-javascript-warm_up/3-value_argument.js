#!/usr/bin/node
// prints the first argument passed to it:
// If no arguments are passed to the script, print “No argument”

const argument = process.argv;
if (argument.length === 2) {
  console.log('No argument');
} else {
  console.log(argument[2]);
}
