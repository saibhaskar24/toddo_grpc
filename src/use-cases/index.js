const database = require('../database');

const makeaddtodo = require('./addtodo');

module.exports = Object.freeze({
    addtodo : makeaddtodo({db: database})
})