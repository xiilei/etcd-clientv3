module.exports = require("protobufjs").newBuilder({})['import']({
    "package": null,
    "messages": [
        {
            "name": "gogoproto",
            "fields": [],
            "options": {
                "java_package": "com.google.protobuf",
                "java_outer_classname": "GoGoProtos"
            }
        },
        {
            "name": "mvccpb",
            "fields": [],
            "options": {
                "(gogoproto.marshaler_all)": true,
                "(gogoproto.sizer_all)": true,
                "(gogoproto.unmarshaler_all)": true,
                "(gogoproto.goproto_getters_all)": false,
                "(gogoproto.goproto_enum_prefix_all)": false
            },
            "messages": [
                {
                    "name": "KeyValue",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "create_revision",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "mod_revision",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "version",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "value",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "lease",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "Event",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "EventType",
                            "name": "type",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "KeyValue",
                            "name": "kv",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "KeyValue",
                            "name": "prev_kv",
                            "id": 3
                        }
                    ],
                    "enums": [
                        {
                            "name": "EventType",
                            "values": [
                                {
                                    "name": "PUT",
                                    "id": 0
                                },
                                {
                                    "name": "DELETE",
                                    "id": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "authpb",
            "fields": [],
            "options": {
                "(gogoproto.marshaler_all)": true,
                "(gogoproto.sizer_all)": true,
                "(gogoproto.unmarshaler_all)": true,
                "(gogoproto.goproto_getters_all)": false,
                "(gogoproto.goproto_enum_prefix_all)": false
            },
            "messages": [
                {
                    "name": "User",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "password",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "roles",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "Permission",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "Type",
                            "name": "permType",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "range_end",
                            "id": 3
                        }
                    ],
                    "enums": [
                        {
                            "name": "Type",
                            "values": [
                                {
                                    "name": "READ",
                                    "id": 0
                                },
                                {
                                    "name": "WRITE",
                                    "id": 1
                                },
                                {
                                    "name": "READWRITE",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Role",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "Permission",
                            "name": "keyPermission",
                            "id": 2
                        }
                    ]
                }
            ]
        },
        {
            "name": "google",
            "fields": [],
            "messages": [
                {
                    "name": "api",
                    "fields": [],
                    "options": {
                        "cc_enable_arenas": true,
                        "java_multiple_files": true,
                        "java_outer_classname": "AnnotationsProto",
                        "java_package": "com.google.api"
                    },
                    "messages": [
                        {
                            "name": "Http",
                            "fields": [
                                {
                                    "rule": "repeated",
                                    "type": "HttpRule",
                                    "name": "rules",
                                    "id": 1
                                }
                            ]
                        },
                        {
                            "name": "HttpRule",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "selector",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "get",
                                    "id": 2,
                                    "oneof": "pattern"
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "put",
                                    "id": 3,
                                    "oneof": "pattern"
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "post",
                                    "id": 4,
                                    "oneof": "pattern"
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "delete",
                                    "id": 5,
                                    "oneof": "pattern"
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "patch",
                                    "id": 6,
                                    "oneof": "pattern"
                                },
                                {
                                    "rule": "optional",
                                    "type": "CustomHttpPattern",
                                    "name": "custom",
                                    "id": 8,
                                    "oneof": "pattern"
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "body",
                                    "id": 7
                                },
                                {
                                    "rule": "repeated",
                                    "type": "HttpRule",
                                    "name": "additional_bindings",
                                    "id": 11
                                }
                            ],
                            "oneofs": {
                                "pattern": [
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    8
                                ]
                            }
                        },
                        {
                            "name": "CustomHttpPattern",
                            "fields": [
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "kind",
                                    "id": 1
                                },
                                {
                                    "rule": "optional",
                                    "type": "string",
                                    "name": "path",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "etcdserverpb",
            "fields": [],
            "options": {
                "(gogoproto.marshaler_all)": true,
                "(gogoproto.unmarshaler_all)": true
            },
            "messages": [
                {
                    "name": "ResponseHeader",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "cluster_id",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "member_id",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "revision",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "raft_term",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "RangeRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "range_end",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "limit",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "revision",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "SortOrder",
                            "name": "sort_order",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "SortTarget",
                            "name": "sort_target",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "serializable",
                            "id": 7
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "keys_only",
                            "id": 8
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "count_only",
                            "id": 9
                        }
                    ],
                    "enums": [
                        {
                            "name": "SortOrder",
                            "values": [
                                {
                                    "name": "NONE",
                                    "id": 0
                                },
                                {
                                    "name": "ASCEND",
                                    "id": 1
                                },
                                {
                                    "name": "DESCEND",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "SortTarget",
                            "values": [
                                {
                                    "name": "KEY",
                                    "id": 0
                                },
                                {
                                    "name": "VERSION",
                                    "id": 1
                                },
                                {
                                    "name": "CREATE",
                                    "id": 2
                                },
                                {
                                    "name": "MOD",
                                    "id": 3
                                },
                                {
                                    "name": "VALUE",
                                    "id": 4
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "RangeResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "mvccpb.KeyValue",
                            "name": "kvs",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "more",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "count",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "PutRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "value",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "lease",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "prev_kv",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "PutResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "mvccpb.KeyValue",
                            "name": "prev_kv",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "DeleteRangeRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "range_end",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "prev_kv",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "DeleteRangeResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "deleted",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "mvccpb.KeyValue",
                            "name": "prev_kvs",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "RequestOp",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "RangeRequest",
                            "name": "request_range",
                            "id": 1,
                            "oneof": "request"
                        },
                        {
                            "rule": "optional",
                            "type": "PutRequest",
                            "name": "request_put",
                            "id": 2,
                            "oneof": "request"
                        },
                        {
                            "rule": "optional",
                            "type": "DeleteRangeRequest",
                            "name": "request_delete_range",
                            "id": 3,
                            "oneof": "request"
                        }
                    ],
                    "oneofs": {
                        "request": [
                            1,
                            2,
                            3
                        ]
                    }
                },
                {
                    "name": "ResponseOp",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "RangeResponse",
                            "name": "response_range",
                            "id": 1,
                            "oneof": "response"
                        },
                        {
                            "rule": "optional",
                            "type": "PutResponse",
                            "name": "response_put",
                            "id": 2,
                            "oneof": "response"
                        },
                        {
                            "rule": "optional",
                            "type": "DeleteRangeResponse",
                            "name": "response_delete_range",
                            "id": 3,
                            "oneof": "response"
                        }
                    ],
                    "oneofs": {
                        "response": [
                            1,
                            2,
                            3
                        ]
                    }
                },
                {
                    "name": "Compare",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "CompareResult",
                            "name": "result",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "CompareTarget",
                            "name": "target",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "version",
                            "id": 4,
                            "oneof": "target_union"
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "create_revision",
                            "id": 5,
                            "oneof": "target_union"
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "mod_revision",
                            "id": 6,
                            "oneof": "target_union"
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "value",
                            "id": 7,
                            "oneof": "target_union"
                        }
                    ],
                    "oneofs": {
                        "target_union": [
                            4,
                            5,
                            6,
                            7
                        ]
                    },
                    "enums": [
                        {
                            "name": "CompareResult",
                            "values": [
                                {
                                    "name": "EQUAL",
                                    "id": 0
                                },
                                {
                                    "name": "GREATER",
                                    "id": 1
                                },
                                {
                                    "name": "LESS",
                                    "id": 2
                                }
                            ]
                        },
                        {
                            "name": "CompareTarget",
                            "values": [
                                {
                                    "name": "VERSION",
                                    "id": 0
                                },
                                {
                                    "name": "CREATE",
                                    "id": 1
                                },
                                {
                                    "name": "MOD",
                                    "id": 2
                                },
                                {
                                    "name": "VALUE",
                                    "id": 3
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "TxnRequest",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "Compare",
                            "name": "compare",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "RequestOp",
                            "name": "success",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "RequestOp",
                            "name": "failure",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "TxnResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "succeeded",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "ResponseOp",
                            "name": "responses",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "CompactionRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "revision",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "physical",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "CompactionResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "HashRequest",
                    "fields": []
                },
                {
                    "name": "HashResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint32",
                            "name": "hash",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "SnapshotRequest",
                    "fields": []
                },
                {
                    "name": "SnapshotResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "remaining_bytes",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "blob",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "WatchRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "WatchCreateRequest",
                            "name": "create_request",
                            "id": 1,
                            "oneof": "request_union"
                        },
                        {
                            "rule": "optional",
                            "type": "WatchCancelRequest",
                            "name": "cancel_request",
                            "id": 2,
                            "oneof": "request_union"
                        }
                    ],
                    "oneofs": {
                        "request_union": [
                            1,
                            2
                        ]
                    }
                },
                {
                    "name": "WatchCreateRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "key",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "bytes",
                            "name": "range_end",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "start_revision",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "progress_notify",
                            "id": 4
                        },
                        {
                            "rule": "repeated",
                            "type": "FilterType",
                            "name": "filters",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "prev_kv",
                            "id": 6
                        }
                    ],
                    "enums": [
                        {
                            "name": "FilterType",
                            "values": [
                                {
                                    "name": "NOPUT",
                                    "id": 0
                                },
                                {
                                    "name": "NODELETE",
                                    "id": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "WatchCancelRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "watch_id",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "WatchResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "watch_id",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "created",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "bool",
                            "name": "canceled",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "compact_revision",
                            "id": 5
                        },
                        {
                            "rule": "repeated",
                            "type": "mvccpb.Event",
                            "name": "events",
                            "id": 11
                        }
                    ]
                },
                {
                    "name": "LeaseGrantRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "TTL",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ID",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "LeaseGrantResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "TTL",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "error",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "LeaseRevokeRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ID",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "LeaseRevokeResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "LeaseKeepAliveRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ID",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "LeaseKeepAliveResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "ID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "TTL",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "Member",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "ID",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "peerURLs",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "clientURLs",
                            "id": 4
                        }
                    ]
                },
                {
                    "name": "MemberAddRequest",
                    "fields": [
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "peerURLs",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MemberAddResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "Member",
                            "name": "member",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MemberRemoveRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "ID",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MemberRemoveResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MemberUpdateRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "ID",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "peerURLs",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "MemberUpdateResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "MemberListRequest",
                    "fields": []
                },
                {
                    "name": "MemberListResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "Member",
                            "name": "members",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "DefragmentRequest",
                    "fields": []
                },
                {
                    "name": "DefragmentResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AlarmRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "AlarmAction",
                            "name": "action",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "memberID",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "AlarmType",
                            "name": "alarm",
                            "id": 3
                        }
                    ],
                    "enums": [
                        {
                            "name": "AlarmAction",
                            "values": [
                                {
                                    "name": "GET",
                                    "id": 0
                                },
                                {
                                    "name": "ACTIVATE",
                                    "id": 1
                                },
                                {
                                    "name": "DEACTIVATE",
                                    "id": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "AlarmMember",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "memberID",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "AlarmType",
                            "name": "alarm",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AlarmResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "AlarmMember",
                            "name": "alarms",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "StatusRequest",
                    "fields": []
                },
                {
                    "name": "StatusResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "version",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "int64",
                            "name": "dbSize",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "leader",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "raftIndex",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "type": "uint64",
                            "name": "raftTerm",
                            "id": 6
                        }
                    ]
                },
                {
                    "name": "AuthEnableRequest",
                    "fields": []
                },
                {
                    "name": "AuthDisableRequest",
                    "fields": []
                },
                {
                    "name": "AuthenticateRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "password",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserAddRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "password",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserGetRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserDeleteRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserChangePasswordRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "password",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserGrantRoleRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "user",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "role",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserRevokeRoleRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "role",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthRoleAddRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthRoleGetRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "role",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserListRequest",
                    "fields": []
                },
                {
                    "name": "AuthRoleListRequest",
                    "fields": []
                },
                {
                    "name": "AuthRoleDeleteRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "role",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthRoleGrantPermissionRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "authpb.Permission",
                            "name": "perm",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthRoleRevokePermissionRequest",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "role",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "key",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "range_end",
                            "id": 3
                        }
                    ]
                },
                {
                    "name": "AuthEnableResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthDisableResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthenticateResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "token",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserAddResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserGetResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "roles",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserDeleteResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserChangePasswordResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserGrantRoleResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthUserRevokeRoleResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthRoleAddResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthRoleGetResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "authpb.Permission",
                            "name": "perm",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthRoleListResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "roles",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthUserListResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "type": "string",
                            "name": "users",
                            "id": 2
                        }
                    ]
                },
                {
                    "name": "AuthRoleDeleteResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthRoleGrantPermissionResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "AuthRoleRevokePermissionResponse",
                    "fields": [
                        {
                            "rule": "optional",
                            "type": "ResponseHeader",
                            "name": "header",
                            "id": 1
                        }
                    ]
                }
            ],
            "enums": [
                {
                    "name": "AlarmType",
                    "values": [
                        {
                            "name": "NONE",
                            "id": 0
                        },
                        {
                            "name": "NOSPACE",
                            "id": 1
                        }
                    ]
                }
            ],
            "services": [
                {
                    "name": "KV",
                    "options": {},
                    "rpc": {
                        "Range": {
                            "request": "RangeRequest",
                            "response": "RangeResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/kv/range",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Put": {
                            "request": "PutRequest",
                            "response": "PutResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/kv/put",
                                "(google.api.http).body": "*"
                            }
                        },
                        "DeleteRange": {
                            "request": "DeleteRangeRequest",
                            "response": "DeleteRangeResponse",
                            "options": {}
                        },
                        "Txn": {
                            "request": "TxnRequest",
                            "response": "TxnResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/kv/txn",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Compact": {
                            "request": "CompactionRequest",
                            "response": "CompactionResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/kv/compaction",
                                "(google.api.http).body": "*"
                            }
                        }
                    }
                },
                {
                    "name": "Watch",
                    "options": {},
                    "rpc": {
                        "Watch": {
                            "request": "WatchRequest",
                            "response": "WatchResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/watch",
                                "(google.api.http).body": "*"
                            }
                        }
                    }
                },
                {
                    "name": "Lease",
                    "options": {},
                    "rpc": {
                        "LeaseGrant": {
                            "request": "LeaseGrantRequest",
                            "response": "LeaseGrantResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/lease/grant",
                                "(google.api.http).body": "*"
                            }
                        },
                        "LeaseRevoke": {
                            "request": "LeaseRevokeRequest",
                            "response": "LeaseRevokeResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/kv/lease/revoke",
                                "(google.api.http).body": "*"
                            }
                        },
                        "LeaseKeepAlive": {
                            "request": "LeaseKeepAliveRequest",
                            "response": "LeaseKeepAliveResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/lease/keepalive",
                                "(google.api.http).body": "*"
                            }
                        }
                    }
                },
                {
                    "name": "Cluster",
                    "options": {},
                    "rpc": {
                        "MemberAdd": {
                            "request": "MemberAddRequest",
                            "response": "MemberAddResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/cluster/member/add",
                                "(google.api.http).body": "*"
                            }
                        },
                        "MemberRemove": {
                            "request": "MemberRemoveRequest",
                            "response": "MemberRemoveResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/cluster/member/remove",
                                "(google.api.http).body": "*"
                            }
                        },
                        "MemberUpdate": {
                            "request": "MemberUpdateRequest",
                            "response": "MemberUpdateResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/cluster/member/update",
                                "(google.api.http).body": "*"
                            }
                        },
                        "MemberList": {
                            "request": "MemberListRequest",
                            "response": "MemberListResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/cluster/member/list",
                                "(google.api.http).body": "*"
                            }
                        }
                    }
                },
                {
                    "name": "Maintenance",
                    "options": {},
                    "rpc": {
                        "Alarm": {
                            "request": "AlarmRequest",
                            "response": "AlarmResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/maintenance/alarm",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Status": {
                            "request": "StatusRequest",
                            "response": "StatusResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/maintenance/status",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Defragment": {
                            "request": "DefragmentRequest",
                            "response": "DefragmentResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/maintenance/defragment",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Hash": {
                            "request": "HashRequest",
                            "response": "HashResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/maintenance/hash",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Snapshot": {
                            "request": "SnapshotRequest",
                            "response": "SnapshotResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/maintenance/snapshot",
                                "(google.api.http).body": "*"
                            }
                        }
                    }
                },
                {
                    "name": "Auth",
                    "options": {},
                    "rpc": {
                        "AuthEnable": {
                            "request": "AuthEnableRequest",
                            "response": "AuthEnableResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/enable",
                                "(google.api.http).body": "*"
                            }
                        },
                        "AuthDisable": {
                            "request": "AuthDisableRequest",
                            "response": "AuthDisableResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/disable",
                                "(google.api.http).body": "*"
                            }
                        },
                        "Authenticate": {
                            "request": "AuthenticateRequest",
                            "response": "AuthenticateResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/authenticate",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserAdd": {
                            "request": "AuthUserAddRequest",
                            "response": "AuthUserAddResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/add",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserGet": {
                            "request": "AuthUserGetRequest",
                            "response": "AuthUserGetResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/get",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserList": {
                            "request": "AuthUserListRequest",
                            "response": "AuthUserListResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/list",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserDelete": {
                            "request": "AuthUserDeleteRequest",
                            "response": "AuthUserDeleteResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/delete",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserChangePassword": {
                            "request": "AuthUserChangePasswordRequest",
                            "response": "AuthUserChangePasswordResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/changepw",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserGrantRole": {
                            "request": "AuthUserGrantRoleRequest",
                            "response": "AuthUserGrantRoleResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/grant",
                                "(google.api.http).body": "*"
                            }
                        },
                        "UserRevokeRole": {
                            "request": "AuthUserRevokeRoleRequest",
                            "response": "AuthUserRevokeRoleResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/user/revoke",
                                "(google.api.http).body": "*"
                            }
                        },
                        "RoleAdd": {
                            "request": "AuthRoleAddRequest",
                            "response": "AuthRoleAddResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/role/add",
                                "(google.api.http).body": "*"
                            }
                        },
                        "RoleGet": {
                            "request": "AuthRoleGetRequest",
                            "response": "AuthRoleGetResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/role/get",
                                "(google.api.http).body": "*"
                            }
                        },
                        "RoleList": {
                            "request": "AuthRoleListRequest",
                            "response": "AuthRoleListResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/role/list",
                                "(google.api.http).body": "*"
                            }
                        },
                        "RoleDelete": {
                            "request": "AuthRoleDeleteRequest",
                            "response": "AuthRoleDeleteResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/role/delete",
                                "(google.api.http).body": "*"
                            }
                        },
                        "RoleGrantPermission": {
                            "request": "AuthRoleGrantPermissionRequest",
                            "response": "AuthRoleGrantPermissionResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/role/grant",
                                "(google.api.http).body": "*"
                            }
                        },
                        "RoleRevokePermission": {
                            "request": "AuthRoleRevokePermissionRequest",
                            "response": "AuthRoleRevokePermissionResponse",
                            "options": {
                                "(google.api.http).post": "/v3alpha/auth/role/revoke",
                                "(google.api.http).body": "*"
                            }
                        }
                    }
                }
            ]
        }
    ]
}).build();