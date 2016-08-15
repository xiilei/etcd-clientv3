## A etcd client for nodejs (grpc api)

## Getting Started

```shell

# install google-protobuf package

git clone https://github.com/google/protobuf.git

cd protobuf/js

gulp dist

npm install /path/to/protobuf/js

```

＃Usage

```javascript

var Etcd = require('etcd-clientv3');

var etcd = new Etcd(['localhost:2379','localhost:22379','localhost:32379']);

//kv
etcd.kv().one('foo',function(err,value){
    //...
});

//watcher
var watcher = etcd.watcher().create('foo','foo2');
watcher.on('error',function(err){
    //...
});

watcher.on('events',function(events){
    //...
});

```
