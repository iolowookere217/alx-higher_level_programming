#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, { json: true }, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    const todos = body;
    const completedTask = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTask[todo.userId]) {
          completedTask[todo.userId]++;
        } else {
          completedTask[todo.userId] = 1;
        }
      }
    });
    console.log(completedTask);
  }
});
