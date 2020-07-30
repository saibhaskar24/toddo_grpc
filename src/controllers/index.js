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

module.exports = Object.freeze({
    "createTodo": makeaddtodoController({usecase: addtodo}),
    "readTodos" : makeaddtodoController({usecase: readtodos}),
    "readTodosStream": makeaddtodoController({usecase: readstream}),
    "updateTodo":makeaddtodoController({usecase: updatetodo}),
    "deleteTodo":makeaddtodoController({usecase: deletetodo}),
    "markCompletedTodo":makeaddtodoController({usecase: markcompletedtodo}),
    "findTodo":makeaddtodoController({usecase: findtodo})
})

