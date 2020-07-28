const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const text = process.argv[2];

const client = new todoPackage.Todo("localhost:40000", 
grpc.credentials.createInsecure())
console.log(text)

client.createTodo({
    "text": text
}, (err, response) => {
    console.log("Create response from " + JSON.stringify(response))
})


// client.updateTodo({
//     "id": 1,
//     "text": text
// }, (err, response) => {
//     console.log("Update response from server " + JSON.stringify(response))
// })


// client.deleteTodo({
//     "id": 1
// }, (err, response) => {
//     console.log("Delete response from server with id " + JSON.stringify(response))
// })


// client.makeCompletedTodo({
//     "id": 1
// }, (err, response) => {
//     console.log("Mark completed response from server " + JSON.stringify(response))
// })

const call = client.readTodosStream();
call.on("data", item => {
    console.log("received item from server " + JSON.stringify(item))
})

call.on("end", e => console.log("server done!"))