'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const router = express.Router();
const port = 4200;

// Socket Io connection
io.on('connection', (client) => {
  console.log('Client connected at: ', Date.now());
  client.on('join', function(data) {
    console.log(data);
    client.emit('messages', 'Hello from server');
  });
});

const routes = require('./app/routes/index.js');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/node_modules'));
app.use('/', router);

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', routes.getHome);
router.get('/map', routes.getMap);

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;
