#!/usr/bin/node

// a function that returns the reversed version of a list

exports.reverse = function (list) {
  const reversedList = [];
  const lastItem = list.length - 1;
  for (let i = lastItem; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return (reversedList);
};
