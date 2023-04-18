#!/usr/bin/node
// executes x times a function.
// The function must be visible from outside
// Prototype: function (x, theFunction)

exports.callMeMoby = function (x, theFunction) {
  for (let a = 0; a < x; a++) {
    theFunction();
  }
};
