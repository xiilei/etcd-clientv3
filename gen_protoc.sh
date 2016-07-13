#!/bin/bash

set -e

RUNDIR=$(dirname $0)

function gen {
    protoc --proto_path=./lib/pb/ \
    --js_out=import_style=commonjs,binary:./lib/pb \
    --grpc_out=./lib/pb \
    --plugin=protoc-gen-grpc=grpc_node_plugin \
     ./lib/pb/$1.proto
}

for f in rpc mvccpb authpb descriptor googleapi;do
    echo "generate $f.proto"
    gen $f
done