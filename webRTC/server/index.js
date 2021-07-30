const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

io.on('connection', (socket) => {
    console.log.log(socket)
    socket.emit('connection', socket.id);

    socket.on('desconnect', () => {
        socket.broadcast.emit('callended');
    })

    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit('calluser', { userToCall, signalData, from, name })
    })

    socket.on('answercall', (data) => {
        io.to(data.to).emit('callaccepted', data.signal)
    })
})

server.listen(5000, () => {
    console.log('Server listening on port 5000');
})