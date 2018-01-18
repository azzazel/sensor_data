const sensor = require('./sensor');

module.exports = function(app, db) {
  sensor(app, db);
  // Other route groups could go here, in the future
};