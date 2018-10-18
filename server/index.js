// node version of course 5.7.0 - no access to import (will use require statements)

// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:learninganalytics/learninganalytics', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));
app.use(cors()); // manage domains that can request our server
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listenint on:', port);