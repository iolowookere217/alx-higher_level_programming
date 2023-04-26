#!/usr/bin/node
// a script that imports an array and computes a new array.

cosnt { list} = require('./100-data');

console.log(list);
console.log(list.map((element, idx) => element * idx));
