module.exports = {
    Service:Service,
    getRangeEnd:getRangeEnd,
    setRequestEnd:setRequestEnd
};
/**
 * base service
 */
function Service(){
    this.conn = null;
    this.name = 'service';
    this.enableOfflineQueue = true;
    this.offlineQueue = [];//push to the queue if client not ready and this.enableOfflineQueue = true
    this.ready = false;//
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