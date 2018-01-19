'use strict';

const path = require('path');

module.exports = {
  getHome: (req, res) => {
    // res.send('home');
    // res.sendFile(__dirname + '../public/index.html');
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
  },
  getMap: (req, res) => {
    res.send('map');
  },
  getPostData: (req, res) => {
    res.send('Hello');
  },
};
