!/usr/bin/node

const fs = require('fs');
const request = require('request');

const filePath = process.argv[3];
const url = process.argv[2];

request(url, 'utf-8', (err, res, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
);
