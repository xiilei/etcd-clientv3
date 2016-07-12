#!/bin/bash
# A tool that generate rpc.js from etcd rpc.proto
# ./gen.sh  -- generate rpc.js
# ./gen.sh update  -- update dependencies and regenerate rpc.js
set -e

RUNDIR=$(dirname $0)
BASE_DIR=$RUNDIR/protos

function clone_repo {
    local destination=$BASE_DIR/${1}
    local repository_url=https://github.com/${2}.git
    git clone $repository_url $destination
}

function update_repo {
    for repo in googleapis etcd googleapis;do
        git --git-dir=$BASE_DIR/$repo/.git pull origin master
    done
}

function clone_all {
    clone_repo googleapis googleapis/googleapis
    clone_repo etcd coreos/etcd
    clone_repo gogoprotobuf gogo/protobuf
}

function gen {
    $RUNDIR/node_modules/.bin/pbjs -p ${BASE_DIR}/googleapis \
     -p ${BASE_DIR} \
     -p ${BASE_DIR}/gogoprotobuf \
     -s proto \
     -t $1 \
     -e etcdserverpb \
      ${BASE_DIR}/etcd/etcdserver/etcdserverpb/rpc.proto > ${RUNDIR}/lib/pb/rpc.$1
}


if [ ! -d $BASE_DIR ]; then
    mkdir $BASE_DIR
    clone_all    
else
    if [ ! -z "$1" ] && [ 'update' = $1 ];then
        update_repo
    fi
fi

gen json
gen proto
gen commonjs