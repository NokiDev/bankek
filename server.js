// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const cron = require("node-cron");

// Get our API routes
const api = require('./server/routes/api');
const users = require('./server/routes/users');
const transactions = require('./server/routes/transactions');

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ["cat"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/users', users);
app.use('/transactions', transactions);


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/bankek', {
  useMongoClient: true
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(chalk.green(`API running on localhost:${port}`)));
