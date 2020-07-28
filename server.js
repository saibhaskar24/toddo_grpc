const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const server = new grpc.Server();
server.bind("0.0.0.0:40000",grpc.ServerCredentials.createInsecure());

server.addService(todoPackage.Todo.service,
    {
        "createTodo": createTodo,
        "readTodos" : readTodos,
        "readTodosStream": readTodosStream,
        "updateTodo":updateTodo,
        "deleteTodo":deleteTodo,
        "makeCompletedTodo":makeCompletedTodo,
        "findTodo":findTodo,
    });
server.start();

const todos = []
function createTodo (call, callback) {
    const todoItem = {
        "id": todos.length + 1,
        "text": call.request.text,
        "iscompleted": false
    }
    todos.push(todoItem)
    callback(null, todoItem);
}


function findTodo(call, callback) { 
    try {   
        var k = todos.find(p => p.id == call.request.id);
    }
    catch(err) {
        console.log("error",err.message);
        callback(null, k);   
      }
    callback(null, k);   
}



function updateTodo(call, callback) {    
    try {  
        var k = todos.find(p => p.id == call.request.id);
        k.text = call.request.text;
    }
    catch(err) {
        console.log("error",err.message);
        callback(null, k);   
    }
    callback(null, k);   
}


function deleteTodo(call, callback) {
    try { 
        var k = todos.findIndex(p => p.id == call.request.id);
        delete todos[k];
    }
    catch(err) {
        console.log("error",err.message);
        callback(null, k);   
    }
    callback(null, call.request.id);     
}



function makeCompletedTodo(call, callback) {
    try { 
    var k = todos.find(p => p.id == call.request.id);
    k.iscompleted = true;
    }
    catch(err) {
        console.log("error",err.message);
        callback(null, k);   
    }
    callback(null, k);   
}


function readTodosStream(call, callback) {
    
    todos.forEach(t => call.write(t));
    call.end();
}


function readTodos(call, callback) {
    callback(null, {"items": todos})   
}