const {server} = require('./../server.js')
const socketIo = require('socket.io')

class SocketController {
    constructor(server) {
        this.init(server)
    }

    init(server) {
        
        const io = socketIo(server)

        io.on('connection', function(socket){
            console.log('a user connected');
        });
    }
}

module.exports = SocketController;