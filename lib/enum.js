/**
 * alias enum types
 */
var mvccpb = require('./pb/mvccpb_pb');

exports.EventPut = mvccpb.Event.EventType.PUT;
exports.EventDelete = mvccpb.Event.EventType.DELETE;