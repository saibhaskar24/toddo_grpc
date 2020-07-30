const database = require('../database');

const makeaddtodo = require('./addtodo');
const readtodos = require('./readtodos');
const deletetodo = require('./deletetodo');

module.exports = Object.freeze({
    addtodo : makeaddtodo({db: database}),
    readtodos : readtodos({db: database}),
    deletetodo : deletetodo({db: database}),
})