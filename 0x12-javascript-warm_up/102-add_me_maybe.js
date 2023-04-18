#!/usr/bin/node

// function that increments and calls a function.
// The function must be visible from outside

exports.addMeMaybe = function (number, theFunction) {
  number += 1;
  theFunction(number);
};
