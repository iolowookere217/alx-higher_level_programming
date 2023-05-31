#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(url + id, { json: true }, function (err, res, body) {
  if (err) { console.log(err); } else {
    const actors = body.characters;
    actors.forEach((actor) => {
      request(actor, { json: true }, (err, res, body) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(body.name);
      });
    });
  }
});
