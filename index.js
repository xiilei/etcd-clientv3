var Client = require('./lib/client');

Client.services = require('./lib/pb/rpc_grpc_pb');

Client.pb = require('./lib/pb/rpc_pb');

Object.assign(Client,require('./lib/enum'));

module.exports = Client;
