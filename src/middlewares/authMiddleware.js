const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.headers.token.split(' ')[1]; // Fix: Use req.headers.token instead of res.headers.token

  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(401).json({
        status: 'ERR',
        message: 'Authentication failed. Invalid token.',
      });
    }
    // const payload = user.payload;
    // console.log('user: ', payload.isAdmin);
    if (user?.isAdmin) {
      next();
    } else {
      return res.status(403).json({
        status: 'ERR',
        message: 'Authorization failed. User is not an admin.',
      });
    }
  });
};
const authUserMiddleware = (req, res, next) => {
  const token = req.headers.token.split(' ')[1]; // Fix: Use req.headers.token instead of res.headers.token
  const userId = req.params.id;
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
    if (err) {
      return res.status(401).json({
        status: 'ERR',
        message: 'Authentication failed. Invalid token.',
      });
    }
    // const payload = user.payload;
    // console.log('user: ', payload.isAdmin);
    if (user?.isAdmin || user?.id === userId) {
      next();
    } else {
      return res.status(403).json({
        status: 'ERR',
        message: 'Authorization failed. User is not an admin.',
      });
    }
  });
};

module.exports = {
  authMiddleware,
  authUserMiddleware,
};
