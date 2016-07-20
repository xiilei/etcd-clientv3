module.exports = Service;
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