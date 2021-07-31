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

try {
    io.on('connection', (socket) => {
        console.log(socket.id)
        socket.emit("me", socket.id);

        socket.on('disconnect', () => {
            socket.broadcast.emit('callEnded');
        })

        socket.on('callUser', ({ userToCall, signalData, from, name }) => {
            io.to(userToCall).emit('callUser', { signal: signalData, from, name });
        })

        socket.on('answerCall', (data) => {
            io.to(data.to).emit('callAccepted', data.signal)
        })

    })
} catch (error) {
    console.log(error)
}


server.listen(5000, () => {
    console.log('Server listening on port 5000');
})