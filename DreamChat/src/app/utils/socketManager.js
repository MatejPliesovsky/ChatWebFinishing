var socketIO = require('../libs/socket.io');

export function createConnection() {
    var socket = socketIO.io.connect('localhost:8080');

    console.log('SOCKET MANAGER - CONNECT');
    console.log(socket);
}

