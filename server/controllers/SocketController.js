const {server} = require('./../server.js')
const socketIo = require('socket.io')

class SocketController {
    constructor(server) {
        this.init(server)
    }

    init(server) {
        const connectedUsers = [];

        const io = socketIo(server)
        
        io.on('connection', function(socket){
            socket.on('username', (user) => {
                connectedUsers.push({
                    id: socket.id,
                    user: user
                })
                console.log(connectedUsers)
                console.log("=======")
            })

            socket.on('disconnect', () => {
                for(let i=0; i < connectedUsers.length; i++){
                    
                    if(connectedUsers[i].id === socket.id){
                        connectedUsers.splice(i,1); 
                    }
                  }
                  console.log('disconnect')
            })

            // console.log('user connected')
            socket.on('send_message', (data) => {
                // console.log('receive data ' + data)
                io.emit('receive_message', data)
            })

            socket.on('send_private_message', (data) => {
                socket.join(`${[connectedUsers[1].id]}`)
                io.in(`${[connectedUsers[1].id]}`).emit('receive_private_message', data)
                // socket.to(`${[connectedUsers[0].id]}`).emit('receive_private_message', data)
            })



            // socket.on('register', handleRegister)

            // socket.on('join', handleJoin)

            // socket.on('leave', handleLeave)

            // socket.on('message', handleMessage)

            // socket.on('chatrooms', handleGetChatrooms)

            // socket.on('disconnect', () => {
            //     console.log('client disconnect...', socket.id)
            //     handleDisconnect()
            // })

            // socket.on('error', (zee) => {
            //     console.log('received error from client:', client.id)
            //     console.log(err)
            // })

        });


    }
}

module.exports = SocketController;