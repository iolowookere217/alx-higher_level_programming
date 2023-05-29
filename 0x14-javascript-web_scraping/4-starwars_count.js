#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const actor = 'https://swapi-api.alx-tools.com/api/people/18/';

request(url, { json: true }, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const films = body.results;
    const match = films.filter((film) => film.characters.includes(actor));
    console.log(`${match.length}`);
  }
});
