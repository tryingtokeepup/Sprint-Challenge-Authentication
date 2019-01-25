// hmm, i wonder if i can do this. this is going to a special route only available to a user named kai

// call it /api/restricted
// maybe this is just for sessions. i should practice it regardless

const axios = require('axios');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');

const { authenticate, makeToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/restricted', authenticate);
};
