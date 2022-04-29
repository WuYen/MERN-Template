const dotenv = require('dotenv');
dotenv.config(); // get config vars

const NODE_ENV = process.env.NODE_ENV;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

module.exports = {
  NODE_ENV,
  MONGODB_URI,
  PORT,
};
