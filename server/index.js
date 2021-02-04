const express = require('express');

//create a new express application
const app = express();

//require the http module
const http = require('http').Server(app);

// require the socket.io module
const socketio = require('socket.io');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const users = require('./routes/api/users');
const messages = require('./routes/api/messages');

// Body Parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Port that the webserver listens to
const port = process.env.PORT || 3007;

const io = socketio(http);
//create an event listener

app.use((req, res, next) => {
  req.io = io;
  global.socket = req.io;

  next();
});
io.on('connection', (socket) => {
  console.log('user connected');
  console.log(socket.id);

  socket.on('disconnect', (socket) => {
    console.log('disconnected');
  });
});

// CORS middleware
app.use(cors());

// Database configuration
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Successfully Connected'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
//wire up the server to listen to our port 500

// Routes
app.use('/api/users', users);
app.use('/api/messages', messages);

http.listen(port, () => {
  console.log('connected to port: ' + port);
});
