const { model } = require("mongoose");

module.exports = ({grpc, protoLoader}) => {
    return () => {
        const controllers = require('../controllers')
        const packageDef = protoLoader.loadSync(`${__dirname}/../protos/todo.proto`);
        const grpcObject = grpc.loadPackageDefinition(packageDef);
        const todoPackage = grpcObject.todoPackage;


        const server = new grpc.Server();
        server.bind("0.0.0.0:40000",grpc.ServerCredentials.createInsecure());

        server.addService(todoPackage.Todo.service,controllers );
        server.start();
    }
}