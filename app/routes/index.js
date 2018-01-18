const path    = require('path');

var getHome  = (req, res) => {
  //res.send('home');
  //res.sendFile(__dirname + '../public/index.html');
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
};

var getMap = (req, res) => {
  res.send('map');
}

var getPostData  = (req, res) => {
  res.send('Hello');
};

module.exports = {
  getHome,
  getMap,
  getPostData
};