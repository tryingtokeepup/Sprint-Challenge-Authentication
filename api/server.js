const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

/// sanity check, and dance check
server.get('/', (req, res) => {
  res.send('hopefully everyone is up in here, up in here.');
});

module.exports = {
  server
};
