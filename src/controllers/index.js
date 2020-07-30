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

module.exports = Object.freeze({
    "createTodo": makeaddtodoController({usecase: addtodo}),
    "readTodos" : makegettodoController({usecase: readtodos}),
    "readTodosStream": makegetstreamtodoController({usecase: readstream}),
    "updateTodo":makeaddtodoController({usecase: updatetodo}),
    "deleteTodo":makeaddtodoController({usecase: deletetodo}),
    "markCompletedTodo":makeaddtodoController({usecase: markcompletedtodo}),
    "findTodo":makeaddtodoController({usecase: findtodo})
})

