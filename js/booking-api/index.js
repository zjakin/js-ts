const express = require('express');
const mongoose = require('mongoose');
const { port, dbURL } = require('config');
const playerRoutes = require('./routes/player');

const app = express();

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  process.exit(1);
});

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

function listen() {
  app.use(express.json());
  app.use(playerRoutes);

  app.use((err, req, res, next) => {
    handleError(err, res);
  });
  // app.use((req, res) => {
  //   res.status(404).send();
  // });

  app.listen(port);
  console.log(`Readyon port ${port}`);
}

function connect() {
  mongoose.connection.on('error', console.log).on('disconnected', connect).once('open', listen);
  return mongoose.connect(dbURL, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connect();
