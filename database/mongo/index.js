
const makeSessionMethods = require('./sessionMethods');


const models = require('./models');

module.exports = Object.freeze({
  session: makeSessionMethods({ sessionModel: models.sessionModel })
});