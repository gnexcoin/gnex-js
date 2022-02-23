var assert = require('assert');
var types = require('../src/auth/serializer/src/types');
var ops = require('../src/auth/serializer/src/operations');

describe("steem.auth: operation test", ()=> {

    it("templates", ()=> {
        for(let op in ops) {
            switch(op) {
                case "operation" : continue
            }
            template(ops[op])
        }
    })

    it("account_create", ()=> {
        let tx = {"ref_block_num": 19297,"ref_block_prefix": 1608085982,"expiration": "2016-03-23T22:41:21","operations": [ ["account_create",{"fee": "0.000 GNEX","creator": "gnxminer","new_account_name": "starfall","owner": {"weight_threshold": 1,"account_auths": [],"key_auths": [ ["GNX5M76XYonNQKPY3Fa73mKsPvY2RJsr2TnNd3iZ5vapt5b1ZAZj4",1 ]]},"active": {"weight_threshold": 1,"account_auths": [],"key_auths": [ ["GNX7FfSSdimKrQ9fW5tNnQ3h3nFdX1YMmCFhZDjvRJKnZaivT6HCM",1 ]]},"posting": {"weight_threshold": 1,"account_auths": [],"key_auths": [ ["GNX7hoFdnJVqwWs2TPwbkTLCFRHL7QZy4DjxhoXWZvijAT2wBN1yE",1 ]]},"memo_key": "GNX648v5hb96ptvZ7MReFKbF13cNsKL6hLGmHP7nmsgzxCX3XHjNH","json_metadata": ""} ]],"extensions": [], "signatures": []}

        let tx_hex = "614bde71d95f911bf3560109000000000000000003535445454d000009696e69746d696e65720573636f74740100000000010332757668fa45c2bc21447a2ff1dc2bbed9d9dda1616fd7b700255bd28e9d674a010001000000000103fb8900a262d51b908846be54fcf04b3a80d12ee749b9446f976b58b220ba4eed010001000000000102af4963d0f034043f4b4b0c99220e6a4b5d8b9cc71e5cd7d110f7602f3a0a11d1010002ff0de11ef55b998daf88047f1a00a60ed5dffb0c23c3279f8bd42a733845c5da000000"

        // 03 53 54 45 45 4d 0000
        assert.equal("GNEX", new Buffer("535445454d", "hex").toString())
        let tx_object1 = ops.signed_transaction.fromObject(tx)
        let tx_object2 = ops.signed_transaction.fromHex(tx_hex)
        assert.deepEqual(tx, ops.signed_transaction.toObject(tx_object1))
        assert.deepEqual(tx, ops.signed_transaction.toObject(tx_object2))
        assert.deepEqual(tx_hex, ops.signed_transaction.toHex(tx_object1))
        assert.deepEqual(tx_hex, ops.signed_transaction.toHex(tx_object2))
    })

})

function template(op) {

    assert(op.toObject({}, {use_default: true}))
    assert(op.toObject({}, {use_default: true, annotate: true}))


}
