const {
    addtodo,
    readtodos,
    deletetodo
} = require('../use-cases');

const makeaddtodoController = require('./addtodo.controller');

module.exports = Object.freeze({
    "createTodo": makeaddtodoController({usecase: addtodo}),
    "readTodos" : makeaddtodoController({usecase: readtodos}),
    "readTodosStream": () => {},
    "updateTodo":() => {},
    "deleteTodo":makeaddtodoController({usecase: deletetodo}),
    "makeCompletedTodo":() => {},
    "findTodo":() => {}
})

