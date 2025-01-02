   const { PeerServer } = require('peer');
   const express = require('express');
   const app = express();
   
   const peerServer = PeerServer({
     port: process.env.PORT || 9000,
     path: '/',
     allow_discovery: true,
   });
   
   // Basic route untuk health check
   app.get('/', (req, res) => {
     res.send('PeerJS server is running');
   });
   
   // Start server
   const PORT = process.env.PORT || 9000;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });