const axios = require('axios');
const db = require('../database/dbConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { authenticate, makeToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const userInfo = req.body;
  // userinfo consists of username, name, and password
  const hash = bcrypt.hashSync(userInfo.password, 8);

  userInfo.password = hash;

  db('users')
    .insert(userInfo)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
}

function login(req, res) {
  const creds = req.body;
  console.log(creds);

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = makeToken(user);
        res
          .status(200)
          .json({
            message: `hey ${user.name}! Welcome to the great game.`,
            token
          });
      } else {
        res
          .status(401)
          .json({
            you: 'Sorry buddy, no room for you here yet. Get registered.'
          });
      }
    })
    .catch(err => res.status(500).json(err));
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
