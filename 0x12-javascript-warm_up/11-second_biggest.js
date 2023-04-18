#!/usr/bin/node
// searches the second biggest integer in the list of arguments.
// You can assume all arguments can be converted to integer
// If no argument passed, print 0

const argument = process.argv;
const length = process.argv.length;
if (length <= 3) {
  console.log(0);
} else {
  console.log(argument.sort().reverse()[1]);
}
