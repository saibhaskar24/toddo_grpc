const database = require('../database');

const makeaddtodo = require('./addtodo');
const readtodos = require('./readtodos');
const readstream = require('./readstream');
const deletetodo = require('./deletetodo');
const updatetodo = require('./updatetodo');
const markcompletedtodo = require('./markcompleted');
const findtodo = require('./findtodo');

module.exports = Object.freeze({
    addtodo : makeaddtodo({db: database}),
    readtodos : readtodos({db: database}),
    readstream : readstream({db: database}),
    deletetodo : deletetodo({db: database}),
    updatetodo : updatetodo({db: database}),
    markcompletedtodo : markcompletedtodo({db: database}),
    findtodo : findtodo({db: database}),
})