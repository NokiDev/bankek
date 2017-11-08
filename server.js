// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')

// Get our API routes
const api = require('./server/routes/api');
const users = require('./server/routes/users');

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

// Catch all other routes and return the index file
// app.get('/angular', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

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
