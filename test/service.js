var expect = require('chai').expect;
var service = require('../lib/_service');
var pb = require('../lib/pb/rpc_pb');

describe('service',function () {
    it('#getRangeEnd',function(){
        expect(service.getRangeEnd('foo')).to.equal('fop');
        expect(service.getRangeEnd('foo1')).to.equal('foo2');
    });
    it('#setRequestEnd',function(){
        var request = new pb.RangeRequest();
        service.setRequestEnd(request,'foo12',true);
        expect(request.getRangeEnd()).to.equal('foo13');
        service.setRequestEnd(request,'foo12','foo14');
        expect(request.getRangeEnd()).to.equal('foo14');
    });
});