const {
    addtodo,
    readtodos,
    deletetodo,
    readstream,
    updatetodo,
    markcompletedtodo,
    findtodo
} = require('../use-cases');

const makeaddtodoController = require('./addtodo.controller');
const makegettodoController = require('./gettodos.controllers');
const makegetstreamtodoController = require('./getstreamtodos.controllers');
const makeupdatetodoController = require('./updatetodo.controller');
const makedeletetodoController = require('./deletetodo.controller');
const makecompletedtodoController = require('./completedtodo.controller');
const makefindtodoController = require('./findtodo.controller');

module.exports = Object.freeze({
    "createTodo": makeaddtodoController({usecase: addtodo}),
    "readTodos" : makegettodoController({usecase: readtodos}),
    "readTodosStream": makegetstreamtodoController({usecase: readstream}),
    "updateTodo":makeupdatetodoController({usecase: updatetodo}),
    "deleteTodo":makedeletetodoController({usecase: deletetodo}),
    "markCompletedTodo":makecompletedtodoController({usecase: markcompletedtodo}),
    "findTodo":makefindtodoController({usecase: findtodo})
})

