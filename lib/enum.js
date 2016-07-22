/**
 * alias enum types
 */
var mvccpb = require('./pb/mvccpb_pb');
var pb = require('./pb/rpc_pb');

//Watcher

exports.EventPut = mvccpb.Event.EventType.PUT;
exports.EventDelete = mvccpb.Event.EventType.DELETE;

exports.NoPut = pb.WatchCreateRequest.FilterType.NOPUT;
exports.NoDelete = pb.WatchCreateRequest.FilterType.NODELETE;