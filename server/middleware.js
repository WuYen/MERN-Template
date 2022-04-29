const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

module.exports = [cors(), express.json(), express.urlencoded({ extended: false }), morgan('tiny')];
