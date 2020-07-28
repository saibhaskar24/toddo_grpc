const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const makegrpcworker = require('./grpc-worker');

module.exports = Object.freeze({
    grpcworker : makegrpcworker({grpc,protoLoader})
})