const {
    addtodo
} = require('../use-cases');

const makeaddtodoController = require('./addtodo.controller');

module.exports = Object.freeze({
    "createTodo": makeaddtodoController({usecase: addtodo}),
    "readTodos" : () => {},
    "readTodosStream": () => {},
    "updateTodo":() => {},
    "deleteTodo":() => {},
    "makeCompletedTodo":() => {},
    "findTodo":() => {}
})

