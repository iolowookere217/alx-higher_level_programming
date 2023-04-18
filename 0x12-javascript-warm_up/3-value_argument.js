#!/usr/bin/node
const argument = process.argv;
if (argument.length === 2) {
  console.log('No Argument');
} else {
  console.log(argument[2]);
}
