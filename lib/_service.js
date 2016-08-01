var debug = require('debug')('etcdv3:service');

module.exports = {
    Service:Service,
    getRangeEnd:getRangeEnd,
    setRequestEnd:setRequestEnd,
    doRequest:doRequest,
    doStreamRequest:doStreamRequest
};
/**
 * base service
 */
function Service(conn){
    this.conn = null;
    this.name = 'service';
    this.enableOfflineQueue = true;
    this.offlineQueue  = [];//push to the queue if client not ready and this.enableOfflineQueue = true
    this.highWaterMark = 100;//max length of offlineQueue
    this.ready = false;
    this.timeout = 10000;
    this.reconnecting = false;
    this.reconnectWhenStatus = [];
    this.handleErrors = function(){};
    if(conn){
        this.setConn(conn);
    }
}

Service.prototype.setConn = function(conn,ready){
    this.conn = conn;
    this.ready = !!ready;
};

Service.prototype.reconnect = function(){};

/**
 * do generic request
 */
function doRequest(agent,method,request,callback,re){
    callback = callback || _.noop;
    if(agent.ready){
        debug('do %s',method);
        agent.conn[method](request,function(err,response){
            if(err && ~agent.reconnectWhenStatus.indexOf(err.code)){
                agent.handleErrors('bad status detected code:'+err.code);
                agent.ready = false;
                _putOfflineQueue(agent,doRequest.bind(undefined,agent,method,request,callback,true),callback);
                debug('reconnecting');
                agent.reconnect();
            }else{
                callback(err,response,re);
            }
        });
        return;
    }else{
        _putOfflineQueue(agent,doRequest.bind(undefined,agent,method,request,callback),callback);
    }
}


/**
 * do stream request
 */
function doStreamRequest(agent,method,callback,re){
    if(agent.ready){
        debug('do %s',method);
        var stream = agent.conn[method]();
        stream.once('error',function(err){
            if(~agent.reconnectWhenStatus.indexOf(err.code) && !agent.reconnecting){
                debug('reconnecting');
                agent.ready = false;
                agent.reconnect();
                _putOfflineQueue(agent,doStreamRequest.bind(undefined,agent,method,callback,true),callback);
            }
        });
        callback(null,stream,re);
    }else{
        _putOfflineQueue(agent,doStreamRequest.bind(undefined,agent,method,callback),callback);
    }
}

/**
 * put request to offlineQueue when grpc connect is not avaiable
 */
function _putOfflineQueue(agent,fn,callback){
    if(!agent.enableOfflineQueue){
        callback(new Error(agent.name+' service not ready'));
        return;
    }
    if(agent.highWaterMark>agent.offlineQueue.length){
        agent.offlineQueue.push(fn);
        debug('%s push to offlineQueue,length:%d',agent.name,agent.offlineQueue.length);
    }else{
        agent.handleErrors('offlineQueue overload,hwm:'+agent.highWaterMark);
    }
}

/**
 * get range end key,like etcdctl --prefix
 */
function getRangeEnd(key){
    var u = 0,i=0;
    for (i = key.length - 1; i >= 0; i--) {
        u = key.charCodeAt(i);
        if (u < 0xff) {
            return key.substring(0,i)+String.fromCharCode(u + 1);
        }
    }
    return '';
}

/**
 * set range_end property of this request
 */
function setRequestEnd(request,key,end){
    end = end === true ? getRangeEnd(key) : end;
    if(end){
        request.setRangeEnd(end);
    }
}