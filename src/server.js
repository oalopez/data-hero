// Name: server.js
// Desc: Server code. This is the code that will run on the server and handle the WebSocket connections.
// Path: src/server.js

const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
  });

app.use(cors());
app.use(express.json());

app.post('/update-status', (req, res) => {
    const { cardId, status } = req.body;
    console.log(`Received update for card ${cardId} with status ${status}. Notifying all clients...`);
    // Broadcast the new status to all connected Socket.IO clients
    try {
        io.sockets.emit('message', { cardId, status });
    } catch (error) {
        console.error('Error emitting message:', error);
        res.status(500).send('Error emitting message');
        return;
    }

    res.send(`Status of card ${cardId} updated to ${status}`);
    console.log('Status updated for all clients');
});

server.listen(3001, () => {
    console.log('Server running at http://localhost:3001');
});