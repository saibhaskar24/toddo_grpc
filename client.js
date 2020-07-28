const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;


const client = new todoPackage.Todo("localhost:40000", 
grpc.credentials.createInsecure())
console.log(text)

console.log("\n1.Create\n2.ReadStream\n3.Update\n4.Delate\n5.MarkDone\n\n")
console.log("Enter your option")


const expression = process.argv[2];

switch (expression)
{
    case 1:        
        const text = process.argv[3];
        client.createTodo({
            "text": text
        }, (err, response) => {
            console.log("Create response from " + JSON.stringify(response))
        })
        break;
    case 2:                
        const call = client.readTodosStream();
        call.on("data", item => {
            console.log("received item from server " + JSON.stringify(item))
        })
        call.on("end", e => console.log("server done!"));
        break;

    case 3:     
        const id = process.argv[3];
        const text = process.argv[4];
        client.updateTodo({
            "id": id,
            "text": text
        }, (err, response) => {
            console.log("Update response from server " + JSON.stringify(response))
        })
        break;
    case 4:
        const id = process.argv[3];
        client.deleteTodo({
            "id": id
        }, (err, response) => {
            console.log("Delete response from server with id " + JSON.stringify(response))
        })
        break;
    case 5:
        const id = process.argv[3];
        client.makeCompletedTodo({
            "id": id
        }, (err, response) => {
            console.log("Mark completed response from server " + JSON.stringify(response))
        })
        break;
    default:
        console.log("Wrong choice")
}




