const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;

// quickly see what this file exports
module.exports = {
  authenticate,
  maketoken
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
}
/// guess i need a token here lol

function makeToken(user) {
  //// i wonder if this will conflict with the above information!
  const payload = {
    id: user.id,
    username: user.username
  };
  const secret = jwtKey;
  const options = {
    expiresIn: '1000m'
  };
  return jwt.sign(payload, secret, options);
}
