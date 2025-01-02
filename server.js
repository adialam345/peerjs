const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();

app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('PeerJS server is running');
});

const server = app.listen(process.env.PORT || 9000);

const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true,
  debug: true,
});

app.use('/', peerServer);

peerServer.on('connection', (client) => {
  console.log('Client connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('Client disconnected:', client.getId());
});

console.log(`Server running on port ${process.env.PORT || 9000}`);