#!/usr/bin/node

const request = require('request');
const arg = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(url + parseInt(arg), { json: true }, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(body.title);
  }
});
