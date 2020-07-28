const mongoose = require('mongoose');
const makeSessionModel = require('./session.model');



const connection = mongoose.createConnection('mongodb://localhost/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);
connection.on('error', console.error.bind(console, 'MongoDB Connection Error>> : '));
connection.once('open', function () {
  console.info('client MongoDB Connection ok!');
});

module.exports = Object.freeze({
  sessionModel: makeSessionModel({ connection, mongoose })
});
