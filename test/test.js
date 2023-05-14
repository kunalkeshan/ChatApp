const assert = require('chai').assert;
const io = require('socket.io-client');
const serverUrl = 'http://localhost:3000';

describe('Socket.io test', function () {
    let client1, client2;

    before(function (done) {
        client1 = io.connect(serverUrl);
        client2 = io.connect(serverUrl);
        done();
    })

    after(function (done) {
        client1.disconnect();
        client2.disconnect();
        done()
    })

    it('Should be table to send and receive messages', function (done) {
        client1.emit('message', 'Hello World!');
        client2.on('message', function (msg) {
            assert.equal(msg, 'Hello World!');
        })
        done();
    })
})
