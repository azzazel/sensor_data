'use strict';

const path = require('path');

module.exports = {
  getHome: (req, res, next) => {
    // res.send('home');
    // res.sendFile(__dirname + '../public/index.html');
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
  },
  getMap: (req, res, next) => {
    res.send('map');
  },
  getPostData: (req, res, next) => {
    console.log('-----------------------------------------------');
    console.log(req.route);
    console.log('-----------------------------------------------');
    var data = JSON.stringify(req.body);
    res.send(data);
  },
};
